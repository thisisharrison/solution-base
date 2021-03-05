import { connect } from "react-redux";
import { fetchPost, createPost, editPost } from "../../actions/post_actions";
import { selectPost } from "../../reducers/selectors";
import PostForm from './post_form'

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.match.params.postId;
  const post = ownProps.location.state ? ownProps.location.state.post : selectPost(state.entities, postId);
  return ({
    post,
    postId
  })
};

const mapDispatchToProps = dispatch => ({
  processForm: (id, formData) => dispatch(editPost(id, formData)),
  fetchPost: id => dispatch(fetchPost(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);