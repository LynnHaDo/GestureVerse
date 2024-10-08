import * as React from "react";
import undoable, { excludeAction } from "redux-undo";
import {
  AnyAction,
  createSlice,
  Dispatch,
  PayloadAction,
  ThunkAction,
} from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { update as updateInventory } from "core/features/inventory";
import { update as logUpdate } from "core/features/log";
import {
  Tag,
  ENTRY_TYPES,
  Next,
  Config,
  NextType,
  RootState,
} from "core/types";
import { gotoChapter, incrementSection } from "core/features/navigation";
import { increment } from "core/features/counter";
import { AppDispatch } from "core/containers/store-container";

import useInventory from "core/hooks/use-inventory";
import {
  optionItemProps,
  Options,
  Variables,
} from "core/components/constants/options";
import { ChoiceBlock, Nav, NavBlock } from "core/components";
import { InlineListEN } from "core/components/widgets/inline-list";
import { isEqual } from "lodash";
import { useVariable } from "core/hooks/use-variable";

export type Option = string;
export type OptionGroup = Array<Option>;
export type Options = Array<OptionGroup>;

// A Choice is composed of a Tag and Options
// Options are one or more OptionGroups
// An OptionGroup is an array of one or more

export interface ChoiceState {
  [tag: Tag]: {
    index: number;
    lastIndex: number;
    resolved: boolean;
  };
}

interface InitChoicePayload {
  tag: Tag;
  lastIndex: number;
}
interface OptionAdvancePayload {
  tag: Tag;
}

const initialState: ChoiceState = null;

export const makeChoice =
  (
    tag: Tag,
    option: Option,
    next?: NextType,
    filename?: string
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch: AppDispatch, getState: () => RootState, config: Config): void => {
    const choiceId = uuidv4();

    dispatch(updateInventory({ tag, option }));
    dispatch(advance({ tag }));
    dispatch(
      logUpdate({
        entry: {
          id: choiceId,
          tag,
          option,
          entry: ENTRY_TYPES.Choice,
          timestamp: new Date().toLocaleDateString(),
        },
      })
    );
    const state = getState();
    const { counter, choices } = state;

    const { resolved } = choices.present[tag];

    // If we've now exhausted the list of possible choices, invoke `next`
    if (resolved) {
      if (next === Next.Section) {
        dispatch(incrementSection({ filename }));
      } else if (next === Next.None) {
        // no-op
      } else if (typeof next === "string") {
        dispatch(gotoChapter({ filename: next }));
      }
    }

    // Update browser do/redo
    const s = {};
    s[config.identifier] = counter.present.value;
    window.history.pushState(s, `Turn: ${counter}`, null);

    dispatch(increment());
  };

export const choicesSlice = createSlice({
  name: "choices",
  initialState,
  reducers: {
    init: (state, action: PayloadAction<InitChoicePayload>) => {
      const { tag, lastIndex } = action.payload;
      state[tag] = {
        index: tag in state ? state[tag].index : 0,
        resolved: tag in state ? state[tag].resolved : false,
        lastIndex,
      };
    },
    // Advance to the next option group if one is available
    advance: (state, action: PayloadAction<OptionAdvancePayload>) => {
      const { tag } = action.payload;

      if (tag in state) {
        if (state[tag].index + 1 > state[tag].lastIndex) {
          // This would advance us past the boundary, so mark resolved
          state[tag].resolved = true;
        } else {
          state[tag].index = state[tag].index + 1;
        }
      } else {
        // If state was uninitialized here, this was a manual update, so simply
        // initialize and mark resolved
        state[tag] = {
          resolved: true,
          index: 0,
          lastIndex: 0,
        };
      }
    },
  },
});

export const { init, advance } = choicesSlice.actions;

export default undoable(choicesSlice.reducer, {
  filter: excludeAction("choices/init"),
  syncFilter: true,
});

export const choiceBlock = (
  tag: string,
  predictionType: "gesture" | "handedness" = "gesture",
  widget: (props: any) => JSX.Element = InlineListEN,
  last: JSX.Element = null,
  keepSelectedChoice: boolean = true,
  purpose: "navigation" | "variableSetter" = "navigation",
  className?: string,
  lastClassName?: string,
  optionsList: {[key: string]: optionItemProps} = null,
  instructionClassName?: string,
): JSX.Element => {
  let [inventory, oneLastOption] = useInventory([
    tag,
    `OneOptionLeftFor${tag}`,
  ]);
  let options = optionsList? optionsList : Options[tag];

  if (purpose == "variableSetter") {
    options = Variables[tag];
    inventory = useVariable(tag);
    oneLastOption = null;
  }

  if (options == null || options == undefined) {
    return null;
  }

  if (inventory != null && inventory != undefined) {
    if (localStorage.getItem(tag) == null) {
      localStorage.setItem(tag, JSON.stringify([inventory]));
    } else {
      let items: Array<string> = JSON.parse(localStorage.getItem(tag));
      if (!items.includes(inventory)) {
        items.push(inventory);
      }

      if (oneLastOption != null && oneLastOption != undefined) {
        let itemLeft: Array<[string, optionItemProps]> = Object.entries(
          options
        ).filter(([key, value], i) =>
          isEqual(value.description, oneLastOption)
        );
        let itemKey = itemLeft.map(([key, value]) => key)[0];
        items.push(itemKey);
      }

      localStorage.setItem(tag, JSON.stringify(items));
    }

    let chosenItems: Array<string> = JSON.parse(localStorage.getItem(tag));
    let remainingOptions: Array<[string, optionItemProps]> = keepSelectedChoice
      ? Object.entries(options)
      : Object.entries(options).filter(
          ([key, value], i) => !chosenItems.includes(key)
        );
        
    let remainingOptionKeys: string[] = remainingOptions.map(
      ([key, value]) => key
    );

    if (remainingOptions.length == 0) {
      return last == null
        ? React.createElement("p", null, "No more options to choose.")
        : last;
    }

    if (remainingOptions.length == 1) {
      return React.createElement('div', {className: lastClassName}, React.createElement(NavBlock, {
        text: options[remainingOptionKeys[0]].description,
        tag: `OneOptionLeftFor${tag}`,
        next: remainingOptionKeys[0],
        instructionClassName: instructionClassName
      }));
    }

    return React.createElement(ChoiceBlock, {
      tag: tag,
      predictionType: predictionType,
      options: Object.fromEntries(remainingOptions),
      widget: widget,
      purpose: purpose,
      className: className,
      persist: keepSelectedChoice,
      instructionClassName: instructionClassName
    });
  }

  return React.createElement(ChoiceBlock, {
    tag: tag,
    predictionType: predictionType,
    widget: widget,
    purpose: purpose,
    className: className,
    persist: keepSelectedChoice,
    instructionClassName: instructionClassName
  });
};
