import { initialState, InitialState } from "./initialState";
import * as actionTypes from "./actionTypes";
import { ClassificationItem } from "../type";

export function reducer(state = initialState, action: any): InitialState {
  switch (action.type) {
    case actionTypes.GET_CLASSIFICATION_LIST:
      return {
        ...state,
        classificationList: action.classificationList,
        curClassification: action.curClassification
      };

    case actionTypes.UPDATE_CUR_CLASSIFICATION:
      return {
        ...state,
        curClassification: state.classificationList.find(
          (item: ClassificationItem) => {
            return item.catName === action.catName;
          }
        ) as ClassificationItem
      };
  }
  return state;
}
