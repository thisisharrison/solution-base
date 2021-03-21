import { connect } from "react-redux";
import { createPost, hidePostForm } from "../../actions/post_actions";
import PostForm from './post_form'

const mapStateToProps = (state, ownProps) => {
  const problemId = ownProps.problemId || false;
  const problemPost = ownProps.problemPost || false;
  const modal = state.ui.modal.postNew;
  const formType = 'create';
  const errors = state.errors.post;
  return ({
    problemId,
    problemPost,
    formType,
    modal,
    errors
  })
};

const mapDispatchToProps = dispatch => ({
  processForm: formData => dispatch(createPost(formData)),
  hidePostForm: key => dispatch(hidePostForm(key))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);