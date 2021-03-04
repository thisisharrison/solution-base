import { RECEIVE_NEW_POST } from '../actions/post_actions';

const initialState = {
  post: undefined
};

const noticeReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_NEW_POST:
      return Object.assign({}, state, { post: action.post });
    default:
      return initialState;
  }
}

export default noticeReducer;