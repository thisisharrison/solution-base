import { 
  RECEIVE_SORT, 
  REMOVE_SORT,
  RECEIVE_TOPIC_FILTER,
  REMOVE_TOPIC_FILTER,
  RECEIVE_POST_TYPE_FILTER,
  REMOVE_POST_TYPE_FILTER
} from '../actions/filter_actions';

// state in payload format
const initialState = {
  topic: {
    sort: undefined
  },
  homepage: {
    topic_id: undefined,
    sort: undefined,
    post_type: undefined
  }
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
    
    case REMOVE_SORT: 
      switch (action.key) {
        case 'topic':
          newState.topic = Object.assign({}, newState.topic, { sort: undefined });
        case 'homepage':
          newState.homepage = Object.assign({}, newState.homepage, { sort: undefined });
        default:
          break;
      }
      return newState;

    
    case RECEIVE_TOPIC_FILTER:
      newState.homepage = Object.assign({}, newState.homepage, { topic_id: action.topic_id });
      return newState;
    
    case REMOVE_TOPIC_FILTER:
      newState.homepage.topic_id = undefined;
      return newState;
    
    case RECEIVE_POST_TYPE_FILTER:
      newState.homepage = Object.assign({}, newState.homepage, { post_type: action.post_type });
      return newState;
    
    case REMOVE_POST_TYPE_FILTER:
      newState.homepage.post_type = undefined;
      return newState;
      
    default:
      return newState;
  } 
}

export default filterReducer;