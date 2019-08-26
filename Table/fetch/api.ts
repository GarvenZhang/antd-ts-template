import { get, post } from "../../../fetch/method";
import {
  UpdateBasicInfoRequestData,
} from "../type";

export const get_table_basic_info = (guid: string, typeName: string) =>
  get(`/datamap/api/tblcol/basicinfo?guid=${guid}&typeName=${typeName}`);
export const update_basic_info = (data: UpdateBasicInfoRequestData) =>
  post(`/datamap/api/tblcol/attredit`, data);
