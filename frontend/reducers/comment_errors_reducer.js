import {
  RECEIVE_COMMENT,
  RECEIVE_COMMENT_ERRORS
} from '../actions/comment_actions';
import {
  REPLY_FORM_CLOSE,
  NEW_FORM_CLOSE,
  EDIT_FORM_CLOSE
} from '../actions/comment_feature_actions';

const commentErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case REPLY_FORM_CLOSE:
      return [];
    case NEW_FORM_CLOSE:
      return [];
    case RECEIVE_COMMENT:
      return [];
    case EDIT_FORM_CLOSE:
      return [];
    case RECEIVE_COMMENT_ERRORS:
      return action.errors;
    default: 
      return state;
  }
}

export default commentErrorsReducer;