import { initialState, State } from "./initialState";
import * as actionTypes from "./actionTypes";

// export const strategies = {
//   [actionTypes.GET_USER_LIST]: (
//     state: State,
//     {  }: any
//   ) => {
//     return { ...state,  };
//   },
// };

// export const reducer = (
//   state: State = initialState,
//   { type, value }: { type: actionTypes.ActionTypes; value: any }
// ): State => {
//   if (!strategies[type]) {
//     return state;
//   }
//   return strategies[type].call(strategies, state, value);
// };

import { initialState, State } from './initialState';
import * as actionTypes from './actionTypes';

export const reducer = (state: State = initialState, { type, value }: { type: actionTypes.ActionTypes; value: any }): State => {
  switch (type) {
    case actionTypes.GET_GOODS_LIST:
      return { ...state, goodsList: value.goodsList };
    case actionTypes.GET_RELATIVE_GOODS_LIST:
      return { ...state, relativeGoods: value.relativeGoods };
    default:
      return state;
  }
};
