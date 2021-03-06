import {
  RECEIVE_TOPIC,
  RECEIVE_TOPIC_NAMES
} from '../actions/topic_actions';
import {
  RECEIVE_POST,
  RECEIVE_NEW_POST
} from '../actions/post_actions';
import { 
  RECEIVE_CURRENT_USER, 
  LOGOUT_CURRENT_USER 
} from '../actions/session_actions';

const initialState = {
  topicNames: []
};

const topicsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  let postTopics;
  switch (action.type) {
    case RECEIVE_TOPIC:
      let topic = { [action.topic.topic.id] : action.topic }
      return Object.assign({}, state, topic);

    case RECEIVE_TOPIC_NAMES:
      let topicNames = { topicNames: action.data }
      return Object.assign({}, state, topicNames);

    case RECEIVE_NEW_POST:
      // check post topics
      const topicIds = action.post.topics.map(topic => topic.id);
      // check problem or solution, make it plural for topics state
      const postType = action.post.post_type + 's';
      // update problemIds/solutionIds
      const postTypeId = action.post.post_type + 'Ids'
      // loop through topics in problem/solution and update
      topicIds.forEach(id => {
        if (newState[id]) {
          newState[id][postType] = {...newState[id][postType], [action.post.id] : action.post }
          // update problemIds/solutionIds
          newState[id][postTypeId].unshift(action.post.id);
          // add to top of postOrder
          newState[id].postOrder.unshift(action.post.id);
        }
      })
      return newState;
    case RECEIVE_CURRENT_USER:
      const bookedTopics = action.user.bookmarks.topicIds;
      Object.keys(newState).forEach(id => {
        if (newState[id].topic) {
          newState[id].topic.hasBookmarked = bookedTopics.includes(parseInt(id));
        }
      });
      return newState;
    case LOGOUT_CURRENT_USER: 
      Object.keys(newState).forEach(id => {
        if (newState[id].topic) {
          newState[id].topic.hasBookmarked = false;
        }
      });
      return newState;

    default:
      return state;
  }
};

export default topicsReducer;