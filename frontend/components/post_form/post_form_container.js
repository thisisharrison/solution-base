import { connect } from "react-redux";
import { fetchPost, createPost, editPost } from "../../actions/post_actions";
import { selectPost } from "../../reducers/selectors";
import PostForm from './post_form'

const mapStateToProps = (state, ownProps) => {
  // in response to a problem, we'll pass problem_id and problemPost
  // pass problem_id as props if posting a solution
  const problem_id = ownProps.location.state ? ownProps.location.state.problem_id : false;
  const problemPost = problem_id ? selectPost(state.entities, problem_id) : {};
  // for editing a post
  const postId = ownProps.match.params.postId;
  const post = ownProps.location.state ? ownProps.location.state.post : selectPost(state.entities, postId);
  return ({
    problem_id,
    problemPost,
    post,
    postId
  })
};

const mapDispatchToProps = dispatch => ({
  createPost: formData => dispatch(createPost(formData)),
  editPost: (id, formData) => dispatch(editPost(id, formData)),
  fetchPost: id => dispatch(fetchPost(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);