import { combineReducers } from "redux";
import notice from './notice_reducer';
import loading from './loading_reducer';
import modal from './modal_reducer';

const uiReducer = combineReducers({
  notice,
  loading,
  modal
});

export default uiReducer;