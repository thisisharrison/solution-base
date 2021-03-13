import { combineReducers } from "redux";
import notice from './notice_reducer';
import loading from './loading_reducer';

const uiReducer = combineReducers({
  notice,
  loading
});

export default uiReducer;