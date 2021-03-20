import { 
  SHOW_POST_FORM, 
  HIDE_POST_FORM,
  SHOW_POST_PREVIEW,
  HIDE_POST_PREVIEW,
  RECEIVE_POST
} from '../actions/post_actions';
import {
  SHOW_SESSION_FORM,
  CLOSE_SESSION_FORM
} from '../actions/session_actions'

const initialState = {
  postEdit: false,
  postNew: false,
  postPreview: {id: false},
  sessionForm: {
    login: false,
    signup: false
  }
};

const modalReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case SHOW_POST_FORM:
      return Object.assign({}, state, { [action.key] : true })
    
    case HIDE_POST_FORM:
      return Object.assign({}, state, { [action.key] : false })
    
    case SHOW_POST_PREVIEW:
      newState.postPreview = action.post;
      return newState;

    case HIDE_POST_PREVIEW:
      newState.postPreview = {id: false};
      return newState;
    
    case RECEIVE_POST:
      if (newState.postPreview.id === action.post.id) {
        newState.postPreview = action.post;
      }
      return newState;
    
    case SHOW_SESSION_FORM:
      newState.sessionForm[action.key] = true;
      return newState;
    
    case CLOSE_SESSION_FORM:
      newState.sessionForm[action.key] = false;
      return newState;

    default:
      return state;
  }
}

export default modalReducer;