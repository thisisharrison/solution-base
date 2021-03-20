import { connect } from "react-redux";
import { fetchPost } from "../../actions/post_actions";
import PostShow from './post_show';
import { selectPost, selectProblemForPost, selectSolutionsForPost, selectCommentsForPost, checkPostOwner, sessionUserId } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const postIdFromMatch = ownProps.match ? ownProps.match.params.postId : false;
  const post = postIdFromMatch ? selectPost(state.entities, postIdFromMatch) : ownProps.post;
  const postId = postIdFromMatch ? postIdFromMatch : post.id;
  // return single post object
  const problem = selectProblemForPost(state.entities, post)
  // returns array of post objects
  const solutions = selectSolutionsForPost(state.entities, post)
  const comments = selectCommentsForPost(state.entities, post);
  const postOwner = checkPostOwner(state.session, post);
  const currentUserId = sessionUserId(state.session);
  const showPostPreview = Object.values(state.ui.modal.postPreview)[0];
  return ({
    postId, 
    post, 
    comments,
    problem, 
    solutions,
    postOwner,
    currentUserId,
    showPostPreview
  })
};

const mapDispatchToProps = dispatch => ({
  fetchPost: id => dispatch(fetchPost(id)),
  hidePostPreview: () => dispatch(showPostPreview())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);