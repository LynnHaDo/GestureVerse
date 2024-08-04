import undoable from "redux-undo";

import {
  AnyAction,
  createSlice,
  Dispatch,
  PayloadAction,
  ThunkAction,
} from "@reduxjs/toolkit";

import { Config, RootState } from "core/types";

import { AppDispatch } from "core/containers/store-container";
import { useSelector } from "react-redux";

interface ScoreState {
  value: number;
}

const initialState = { value: 0 } satisfies ScoreState as ScoreState;

const score = createSlice({
  name: "score",
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
  },
});

export const { increment } = score.actions;

export const incrementScore =
  (): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch: AppDispatch, getState: () => RootState, config: Config): void => {
    dispatch(increment());
  };

export default undoable(score.reducer);
