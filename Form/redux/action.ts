import * as actionTypes from "./actionTypes";
import { Dispatch } from "redux";
import {  } from "../fetch/api";
import {
  GetUserListParams,
  UpdateRoleRequestData,
  GetUserListInfo,
  RoleItem
} from "../type";

export const getUserList: (
  paramsObj: GetUserListParams,
  cb?: NoParamsNoReturnValueFn
) => void = (paramsObj, cb) => async (dispatch: Dispatch) => {
  try {
    const {
      info: {  }
    }: CommonResponseData<GetUserListInfo> = await get_user_list(paramsObj);
    dispatch({
      type: actionTypes.GET_USER_LIST,
      value: {  }
    });
    cb && cb();
  } catch (e) {
    console.error(e);
  }
};

export const getRoleList: () => void = () => async (dispatch: Dispatch) => {
  try {
    const {
      info: roleList
    }: CommonResponseData<RoleItem> = await get_role_list();
    dispatch({
      type: actionTypes.GET_ROLE_LIST,
      value: {  }
    });
  } catch (e) {
    console.error(e);
  }
};

export const updateRole: (
  data: UpdateRoleRequestData,
  cb?: NoParamsNoReturnValueFn
) => void = (data, cb) => async (dispatch: Dispatch) => {
  try {
    await update_role(data);
    cb && cb();
  } catch (e) {
    console.error(e);
  }
};
