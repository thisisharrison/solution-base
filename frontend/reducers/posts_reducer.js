import {
  RECEIVE_POSTS,
  RECEIVE_POST,
} from '../actions/post_actions';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_POST:
      // instead of storing current viewed post
      // we can also store solution and problem posts linked to current post
      // return Object.assign({}, state, { [action.post.id] : action.post });
      let post = { [action.post.id] : action.post };
      let solutions = {};
      let problem = {};
      if (action.solutions) {
        solutions = action.solutions;
      }
      if (action.problem) {
        problem = { [action.problem.id] : action.problem};
      }
      return Object.assign({}, state, { ...post, ...problem, ...solutions} )
    default: 
      return state;
  }
};

export default postsReducer;