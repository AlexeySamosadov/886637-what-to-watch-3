import {combineReducers} from "redux";
import {reducer as appStatus} from "./reducer/app-status/app-status.js";
import {reducer as data} from "./reducer/data/data.js";
import NameSpace from "./components/name-space.js";

export default combineReducers({
  [NameSpace.APP_STATUS]: appStatus,
  [NameSpace.DATA]: data,
});
