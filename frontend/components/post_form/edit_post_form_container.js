import { connect } from "react-redux";
import { editPost, hidePostForm } from "../../actions/post_actions";
import PostForm from './post_form'

const mapStateToProps = (state, ownProps) => {
  const post = ownProps.post;
  const modal = state.ui.modal.postEdit;
  const formType = 'edit';
  return ({
    post,
    formType,
    modal
  })
};

const mapDispatchToProps = dispatch => ({
  processForm: (id, formData) => dispatch(editPost(id, formData)),
  hidePostForm: key => dispatch(hidePostForm(key))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);