import {
  REPLY_FORM_OPEN,
  REPLY_FORM_CLOSE,
  NEW_FORM_OPEN,
  NEW_FORM_CLOSE
} from '../actions/comment_feature_actions'

const initialState = {
  replyFormOpen: {null: false},
  newFormOpen: false
}

const commentFeatureReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case REPLY_FORM_OPEN:
      newState.replyFormOpen = { [action.id] : true };
      newState.newFormOpen = false;
      return newState;

    case REPLY_FORM_CLOSE:
      newState.replyFormOpen = { null : false };
      return newState;
    
    case NEW_FORM_OPEN:
      newState.newFormOpen = true;
      newState.replyFormOpen = { null : false };
      return newState;
    
    case NEW_FORM_CLOSE:
      newState.newFormOpen = false;
      return newState;

    default: 
      return state;
  }
};

export default commentFeatureReducer;