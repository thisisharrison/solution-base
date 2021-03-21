import {
  RECEIVE_CURRENT_USER
} from '../actions/session_actions'
import {
  CLOSE_GREETING
} from '../actions/greeting_actions'

const initialState = {
  demo: true,
  intro: true
}

const greetingReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState.demo = false;
      return newState;
    
    case CLOSE_GREETING:
      newState.demo = false;
      newState.intro = false;
      return newState;
  
    default:
      return state;
  }
};

export default greetingReducer;