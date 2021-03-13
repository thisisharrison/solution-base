import {
  START_INDEX_LOADING,
  STOP_INDEX_LOADING,
  START_ITEM_LOADING,
  STOP_ITEM_LOADING
} from '../actions/loading_action';

const initialState = {
  indexLoading: false,
  itemLoading: false
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_INDEX_LOADING:
      return Object.assign({}, state, { indexLoading: true });
    case STOP_INDEX_LOADING:
      return Object.assign({}, state, { indexLoading: false });
    case START_ITEM_LOADING:
      return Object.assign({}, state, { itemLoading: true });
    case STOP_ITEM_LOADING:
      return Object.assign({}, state, { itemLoading: false });  
    default:
      return state;
  }
};

export default loadingReducer;