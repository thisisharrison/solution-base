import { combineReducers } from "redux";
import notice from './notice_reducer';
import loading from './loading_reducer';
import modal from './modal_reducer';
import comments from './comment_feature_reducer';

const uiReducer = combineReducers({
  notice,
  loading,
  modal,
  comments
});

export default uiReducer;