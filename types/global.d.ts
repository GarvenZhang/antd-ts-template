declare type NoParamsNoReturnValueFn = () => void

declare interface CommonResponseData<T> {
  code: string;
  info: T;
  msg: string;
}