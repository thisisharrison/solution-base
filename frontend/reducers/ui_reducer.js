import { combineReducers } from "redux";
import notice from './notice_reducer';
import loading from './loading_reducer';
import modal from './modal_reducer';
import comments from './comment_feature_reducer';
import greeting from './greeting_reducer';

const uiReducer = combineReducers({
  greeting,
  notice,
  loading,
  modal,
  comments
});

export default uiReducer;