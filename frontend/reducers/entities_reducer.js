import { combineReducers } from "redux";
import users from './users_reducer';
import posts from './posts_reducer';
import comments from './comments_reducer';
import topics from './topics_reducer'

const entitiesReducer = combineReducers({
  users,
  posts,
  comments,
  topics
});

export default entitiesReducer;