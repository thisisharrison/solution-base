import { RECEIVE_SORT } from '../actions/search_actions';

const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SORT:
      // temporary
      return {[action.sort] : action.dir}  
    default:
      return state;
  } 
}

export default filterReducer;