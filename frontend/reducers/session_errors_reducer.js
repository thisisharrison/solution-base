import {
  RECEIVE_AUTH_ERRORS,
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLOSE_SESSION_FORM
} from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_ERRORS:
      return action.errors;
    case RECEIVE_AUTH_ERRORS:
      return action.errors;
    case CLOSE_SESSION_FORM:
      return [];
    default: 
      return state;
  }
}

export default sessionErrorsReducer;