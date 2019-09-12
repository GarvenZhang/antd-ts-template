import { Dispatch } from "redux";
import {  } from "../fetch/api";

// State

export type LbItem = string;

interface State {
  info: LbItem[];
}

const State = {
  info: []
};

// actionTypes

export const GET_LB_LIST = Symbol();

// action

export interface GetLbList {
  type: GET_LB_LIST;
  info: LbItem[];
}

export type LbAction = GetLbList;

export const getLbList: () => void = () => (dispatch: Dispatch) =>
  get_lb_list()
    .then((res: any) => {
      dispatch({
        type: GET_LB_LIST,
        info: res.info
      });
    })
    .catch((e: Error) => {
      console.error(e);
    });

// reducer

export function reducer(
  state: State = State,
  action: LbAction
): State {
  switch (action.type) {
    case GET_LB_LIST:
      return {
        ...state,
        info: action.info
      };
  }
  return state;
}
