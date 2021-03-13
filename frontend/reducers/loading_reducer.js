import {
  START_INDEX_LOADING,
  START_ITEM_LOADING
} from '../actions/loading_action';
import {
  RECEIVE_POSTS,
  RECEIVE_POST,
  RECEIVE_NEW_POST,
  REMOVE_POST,
} from '../actions/post_actions';
import {
  RECEIVE_TOPIC,
  RECEIVE_TOPIC_NAMES
} from '../actions/topic_actions';

const initialState = {
  indexLoading: false,
  itemLoading: false
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_INDEX_LOADING:
      return Object.assign({}, state, { indexLoading: true });
    
    case START_ITEM_LOADING:
      return Object.assign({}, state, { itemLoading: true });
    
    case RECEIVE_POSTS:
      return Object.assign({}, state, { indexLoading: false });
    case RECEIVE_POST:
      return Object.assign({}, state, { itemLoading: false });
    case RECEIVE_NEW_POST:
      return Object.assign({}, state, { itemLoading: false });
    case REMOVE_POST:
      return Object.assign({}, state, { itemLoading: false });

    case RECEIVE_TOPIC:
      return Object.assign({}, state, { indexLoading: false });
    // this doesn't take that long
    // case RECEIVE_TOPIC_NAMES:
    //   return Object.assign({}, state, { indexLoading: false });
    default:
      return state;
  }
};

export default loadingReducer;