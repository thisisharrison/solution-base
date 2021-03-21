import {
  RECEIVE_POST_ERRORS,
  HIDE_POST_FORM,
  RECEIVE_NEW_POST
} from '../actions/post_actions';

const postErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POST_ERRORS:
      return action.errors;
    case HIDE_POST_FORM:
      return []
    case RECEIVE_NEW_POST:
      return []
    default: 
      return state;
  }
}

export default postErrorsReducer;