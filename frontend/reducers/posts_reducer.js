import {
  RECEIVE_POSTS,
  RECEIVE_POST,
} from '../actions/post_actions';
import { RECEIVE_TOPIC } from '../actions/topic_actions';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_POST:
      // old method:
      // return Object.assign({}, state, { [action.post.id] : action.post });
      
      // new method:
      // instead of only storing current viewed post
      // we can also store solution and problem posts associated to the current post
      let post = { [action.post.id] : action.post };
      let solutions = {};
      let problem = {};
      if (action.solutions) {
        solutions = action.solutions;
      }
      if (action.problem) {
        problem = action.problem;
      }
      return Object.assign({}, state, { ...post, ...problem, ...solutions} )
    
    case RECEIVE_TOPIC:
      return Object.assign({}, state, {...action.topic.problems, ...action.topic.solutions});

    default: 
      return state;
  }
};

export default postsReducer;