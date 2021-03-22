import {
  RECEIVE_POSTS,
  RECEIVE_POST,
  RECEIVE_NEW_POST,
  REMOVE_SOLUTIONS,
  REMOVE_POST
} from '../actions/post_actions';
import { 
  RECEIVE_COMMENT,
  REMOVE_COMMENT 
} from '../actions/comment_actions'
import { RECEIVE_TOPIC } from '../actions/topic_actions';
import { 
  RECEIVE_CURRENT_USER, 
  LOGOUT_CURRENT_USER 
} from '../actions/session_actions';

const initialState = {
  new: undefined,
  postOrder: []
};

const postsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_POSTS:
      return Object.assign({}, state, action.posts, { postOrder: action.postOrder });
    // return action.posts;

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
      return Object.assign({}, state, { ...post, ...problem, ...solutions, new: undefined } )
    
    case RECEIVE_TOPIC:
      return Object.assign({}, state, {...action.topic.problems, ...action.topic.solutions});
      // return Object.assign({}, state, action.topic.posts);

    case RECEIVE_NEW_POST:
      // add post id to solutionIds of problem post
      if (action.post.problem_id) {
        newState[action.post.problem_id].solutionIds.push(action.post.id)
      }
      newState.postOrder.unshift(action.post.id);
      return Object.assign({}, newState, { [action.post.id]: action.post, new: action.post })

    case REMOVE_POST:
      delete newState[action.post.id]
      newState.postOrder = newState.postOrder.filter(id => id !== action.post.id);
      return newState;
    
    case REMOVE_SOLUTIONS:
      // remove its solutions (none for a solution post)
      newState[action.id].solutionIds.forEach(id => delete newState[id])
      return newState;
    
    case RECEIVE_COMMENT:
      if (newState[action.comment.postId].commentIds.includes(action.comment.id)) {
        return newState;
      }
      newState[action.comment.postId].commentIds.push(action.comment.id);
      return newState;

    case RECEIVE_CURRENT_USER:
      // update hasBookmarked and hasVoted 
      const bookedPosts = action.user.bookmarks.postIds;
      const votedPosts = action.user.votes.postIds;
      Object.keys(newState).forEach(id => {
        if (newState[id]) {
          newState[id].hasVoted = votedPosts.includes(parseInt(id));
          newState[id].hasBookmarked = bookedPosts.includes(parseInt(id));
        }
      });
      return newState;

    case LOGOUT_CURRENT_USER:
      Object.keys(newState).forEach(id => {
        if (newState[id]) {
          newState[id].hasVoted = false;
          newState[id].hasBookmarked = false;
        }
      });
      return newState;

    default: 
      return state;
  }
};

export default postsReducer;