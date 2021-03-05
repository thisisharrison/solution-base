import { 
  RECEIVE_COMMENT,
  REMOVE_COMMENT 
} from '../actions/comment_actions';
import {
  RECEIVE_POST
} from '../actions/post_actions';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_POST:
      return Object.assign({}, state, action.all_comments);
    
    case RECEIVE_COMMENT:
      return Object.assign({}, state, { [action.comment.id] : action.comment });
    
    case REMOVE_COMMENT: 
      delete newState[action.comment.id];
      return newState;

    default: 
      return state;
  }
};

export default commentsReducer;