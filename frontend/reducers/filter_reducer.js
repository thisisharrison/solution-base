import { 
  RECEIVE_SORT, 
  RECEIVE_TOPIC_FILTER,
  REMOVE_TOPIC_FILTER,
  RECEIVE_POST_TYPE_FILTER,
  REMOVE_POST_TYPE_FILTER
} from '../actions/filter_actions';

const initialState = {
  topic: {},
  homepage: {}
}

const filterReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_SORT:
      switch (action.key) {
        case 'topic':
          newState.topic = Object.assign({}, newState.topic, { sort: action.sort });
        case 'homepage':
          newState.homepage = Object.assign({}, newState.homepage, { sort: action.sort});
        default:
          break;
      }
      return newState;
    
    case RECEIVE_TOPIC_FILTER:
      newState.homepage = Object.assign({}, newState.homepage, { topicId: action.topicId });
      return newState;
    
    case REMOVE_TOPIC_FILTER:
      newState.homepage.topicId = undefined;
      return newState;
    
    case RECEIVE_POST_TYPE_FILTER:
      newState.homepage = Object.assign({}, newState.homepage, { postType: action.postType });
      return newState;
    
    case REMOVE_POST_TYPE_FILTER:
      newState.homepage.postType = undefined;
      return newState;
      
    default:
      return newState;
  } 
}

export default filterReducer;