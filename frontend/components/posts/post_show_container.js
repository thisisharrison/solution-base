import { connect } from "react-redux";
import { fetchPost } from "../../actions/post_actions";
import PostShow from './post_show';
import { selectPost, selectProblemForPost, selectSolutionsForPost, selectCommentsForPost, checkPostOwner, sessionUserId } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.match.params.postId;
  const post = selectPost(state.entities, postId);
  // return single post object
  const problem = selectProblemForPost(state.entities, post)
  // returns array of post objects
  const solutions = selectSolutionsForPost(state.entities, post)
  const comments = selectCommentsForPost(state.entities, post);
  const postOwner = checkPostOwner(state.session, post);
  const currentUserId = sessionUserId(state.session);
  return ({
    postId, 
    post, 
    comments,
    problem, 
    solutions,
    postOwner,
    currentUserId
  })
};

const mapDispatchToProps = dispatch => ({
  fetchPost: id => dispatch(fetchPost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);