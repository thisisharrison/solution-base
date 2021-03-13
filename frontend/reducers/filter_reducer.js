import { RECEIVE_SORT } from '../actions/filter_actions';

const initialState = {
  // filter which topic ID and which type
  filter: {},
  // sort which topic ID and by which order
  sorting: {}
}

const filterReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_SORT:
      // future enhancement to save user's sort and filter preference 
      newState.sorting = Object.assign({}, newState.sorting, { [action.id] : action.sort });
      return newState;
    default:
      return state;
  } 
}

export default filterReducer;