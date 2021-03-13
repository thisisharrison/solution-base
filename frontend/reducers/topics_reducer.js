import {
  RECEIVE_TOPIC,
  RECEIVE_TOPIC_NAMES
} from '../actions/topic_actions';
import {
  RECEIVE_POST
} from '../actions/post_actions';

const initialState = {
  topicNames: []
};

const topicsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_TOPIC:
      let topic = { [action.topic.topic.id] : action.topic }
      return Object.assign({}, state, topic);

    case RECEIVE_TOPIC_NAMES:
      let topicNames = { topicNames: action.data }
      return Object.assign({}, state, topicNames);

    case RECEIVE_POST:
      // check post topics
      const topicIds = action.post.topics.map(topic => topic.id);
      // check problem or solution, make it plural for topics state
      const postType = action.post.post_type + 's';
      // loop through topics in problem/solution and update
      topicIds.forEach(id => {
        if (newState[id]) {
          newState[id][postType] = {...newState[id][postType], [action.post.id] : action.post }
        }
      })
      return newState;

    default:
      return state;
  }
};

export default topicsReducer;