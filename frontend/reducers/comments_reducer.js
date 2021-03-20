import { 
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
  RECEIVE_UPDATE_COMMENT
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

    case RECEIVE_UPDATE_COMMENT:
      return Object.assign({}, state, { [action.comment.id] : action.comment });
    
    case REMOVE_COMMENT: 
      delete newState[action.comment.id];
      // delete it's children from state
      Object.keys(newState).forEach(id => {
        if (newState[id].parent_comment_id === action.comment.id) {
          delete newState[id]
        }
      });
      return newState;

    default: 
      return state;
  }
};

export default commentsReducer;