import { useSelector } from "react-redux";
import { RootState } from "core/types";

export const useVariable = (
  /** Name of variable to look for value */
  name?: string,
  /** List of variable names to look for values */
  nameList?: Array<string>
): any | any[] => {
  if (nameList != null) {
    if (nameList.length > 0) {
      var values: any[] = [];
      for (var name of nameList) {
        let value = useSelector((state: RootState) =>
          state.variableManager.present == null
            ? null
            : state.variableManager.present[name]
        );
        values.push(value);
      }
      return values;
    }
  }

  if (name != null) {
    return useSelector((state: RootState) =>
      state.variableManager.present == null
        ? null
        : state.variableManager.present[name]
    );
  }

  return undefined;
};
