import undoable, { excludeAction } from "redux-undo";

import {
  AnyAction,
  createSlice,
  PayloadAction,
  ThunkAction,
} from "@reduxjs/toolkit";

import { Config, RootState } from "core/types";

import { AppDispatch } from "core/containers/store-container";

interface InitVariablePayload {
  name: string;
  value?: any;
}

interface UpdateVariablePayload {
  name: string;
  value: any;
}

export interface GenericVariableState {
  [name: string]: any;
}

const initialState = {} as GenericVariableState;

const variableManager = createSlice({
  name: "variableManager",
  initialState,
  reducers: {
    init: (state, action: PayloadAction<InitVariablePayload>) => {
      const { name } = action.payload;
      if (!(name in state)) {
        state[name] = null;
      }
    },
    update: (state, action: PayloadAction<UpdateVariablePayload>) => {
      const { name, value } = action.payload;
      if (state[name] !== value) {
        state[name] = value;
      }
    },
  },
});

export const { init, update } = variableManager.actions;

export const updateVariable =
  (
    /** Name of variable to update */
    name: string,
    /** New value to assign to the variable */
    value: any
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch: AppDispatch, getState: () => RootState, config: Config): void => {
    dispatch(update({ name, value }));
  };

export default undoable(variableManager.reducer, {
  filter: excludeAction("variableManager/init"),
  syncFilter: true,
});
