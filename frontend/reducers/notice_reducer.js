import { RECEIVE_NEW_POST } from '../actions/post_actions';

const initialState = {
  post: undefined
};

const noticeReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_NEW_POST:
      return state;
    default:
      return state;
  }
}

export default noticeReducer;