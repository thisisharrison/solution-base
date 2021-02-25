import {
  RECEIVE_POST
} from '../actions/post_actions';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POST:
      return Object.assign({}, state, action.all_comments)
    default: 
      return state;
  }
};

export default commentsReducer;