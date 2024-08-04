import { useSelector } from "react-redux";
import { RootState } from "core/types";

export const useScore = () => {
  return useSelector((state: RootState) => state.score.present.value);
};
