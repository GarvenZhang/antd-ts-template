import * as actionTypes from './actionTypes';
import { Dispatch } from 'redux';
import { get_classification_list, add_classification, update_classification, delete_classification } from '../fetch/api';
import { ClassificationItem, AddClassificationRequestData, UpdateClassificationRequestData } from '../index.d';

// 获取分类列表
export const getClassificationList: (cb?: NoParamsNoReturnValueFn) => void = (cb) => async (dispatch: Dispatch) => {
  const { info: classificationList }: CommonResponseData<ClassificationItem[]> = await get_classification_list();
  dispatch({
    type: actionTypes.GET_CLASSIFICATION_LIST,
    value: { classificationList },
  });
  cb && cb();
};

// 添加分类
export const addClassification: (data: AddClassificationRequestData, cb?: NoParamsNoReturnValueFn) => void = (data, cb) => async (
  dispatch: Dispatch,
) => {
  await add_classification(data);
  cb && cb();
};

// 更新分类
export const updateClassification: (data: UpdateClassificationRequestData, cb?: NoParamsNoReturnValueFn) => void = (data, cb) => async (
  dispatch: Dispatch,
) => {
  await update_classification(data);
  cb && cb();
};

// 删除分类
export const deleteClassification: (catName: string, cb?: NoParamsNoReturnValueFn) => void = (catName, cb) => async (
  dispatch: Dispatch,
) => {
  await delete_classification(catName);
  cb && cb();
};
