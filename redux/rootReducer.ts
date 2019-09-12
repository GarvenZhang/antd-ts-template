import { combineReducers } from "redux";
import { reducer as AuthorityManagementReducer } from "../containers/Authority-Management/redux/reducer";
import { reducer as ClassificationManagementReducer } from "../containers/Classification-Management/redux/reducer";
import { reducer as MetadataManagementReducer } from "../containers/Metadata-Management/redux/reducer";
import { reducer as TermManagementReducer } from "../containers/Term-Management/redux/reducer";
import { reducer as MetadataDetailManagementReducer } from "../containers/Metadata-Detail/redux/reducer";
import { reducer as GlobalReducer } from "./global/reducer";

export default combineReducers({
  AuthorityManagementReducer,
  ClassificationManagementReducer,
  MetadataManagementReducer,
  TermManagementReducer,
  MetadataDetailManagementReducer,
  GlobalReducer
});
