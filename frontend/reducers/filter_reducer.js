import { 
  RECEIVE_SORT, 
  RECEIVE_TOPIC_FILTER,
  RECEIVE_POST_TYPE_FILTER 
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
          newState.topic = Object.assign({}, newState.topic, { [action.id]: action.sort });
        case 'homepage':
          newState.homepage = Object.assign({}, newState.homepage, { sort: action.sort});
        default:
          break;
      }
      return newState;
    
    case RECEIVE_TOPIC_FILTER:
      newState.homepage = Object.assign({}, newState.homepage, { topic: action.topic });
      return newState;
    
    case RECEIVE_POST_TYPE_FILTER:
      newState.homepage = Object.assign({}, newState.homepage, { postType: action.postType });
      return newState;
      
    default:
      return state;
  } 
}

export default filterReducer;