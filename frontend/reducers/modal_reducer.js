import { SHOW_POST_FORM, HIDE_POST_FORM } from '../actions/post_actions';

const initialState = {
  postEdit: false,
  postNew: false
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_POST_FORM:
      return Object.assign({}, state, { [action.key] : true })
    case HIDE_POST_FORM:
      return Object.assign({}, state, { [action.key] : false })
    default:
      return state;
  }
}

export default modalReducer;