import { combineReducers } from "redux";
import notice from './notice_reducer';

const uiReducer = combineReducers({
  notice
});

export default uiReducer;