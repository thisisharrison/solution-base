import {
  RECEIVE_TOPIC
} from '../actions/topic_actions';

const topicsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TOPIC:
      let topic = { [action.topic.topic.id] : action.topic }
      return Object.assign({}, state, topic);
    default:
      return state;
  }
};

export default topicsReducer;