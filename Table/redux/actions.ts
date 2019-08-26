import * as actionTypes from "./actionTypes";
import { Dispatch } from "redux";
import {
  get_classification_list,
  add_classification,
  update_classification,
  delete_classification
} from "../fetch/api";
import {
  ClassificationItem,
  AddClassificationRequestData,
  UpdateClassificationRequestData
} from "../type";

// 将查数据的步骤提取出来
const _getClassificationList = (dispatch: Dispatch, cb?: () => void) =>
  get_classification_list().then((res: any) => {
    dispatch({
      type: actionTypes.GET_CLASSIFICATION_LIST,
      classificationList: res.info,
      curClassification: res.info[0]
    });
    cb && cb();
  });

// 获取分类列表
export const getClassificationList: () => void = () => (dispatch: Dispatch) =>
  _getClassificationList(dispatch).catch((e: Error) => {
    console.error(e);
  });

// 更新目前关注的分类
export const updateCurClassification: (catName: string) => void = catName => (
  dispatch: Dispatch
) => {
  dispatch({
    type: actionTypes.UPDATE_CUR_CLASSIFICATION,
    catName
  });
};

// 添加分类
export const addClassification: (
  data: AddClassificationRequestData,
  cb: () => void
) => void = (data, cb) => (dispatch: Dispatch) =>
  add_classification(data)
    .then((res: any) => {
      return _getClassificationList(dispatch, cb);
    })
    .catch((e: Error) => {
      console.error(e);
    });

// 更新分类
export const updateClassification: (
  data: UpdateClassificationRequestData,
  cb: () => void
) => void = (data, cb) => (dispatch: Dispatch) =>
  update_classification(data)
    .then((res: any) => {
      return _getClassificationList(dispatch, cb);
    })
    .catch((e: Error) => {
      console.error(e);
    });

// 删除分类
export const deleteClassification: (catName: string) => void = catName => (
  dispatch: Dispatch
) =>
  delete_classification(catName)
    .then((res: any) => {
      return _getClassificationList(dispatch);
    })
    .catch((e: Error) => {
      console.error(e);
    });
