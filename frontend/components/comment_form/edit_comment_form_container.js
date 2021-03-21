import { connect } from 'react-redux'
import { editComment } from '../../actions/comment_actions'
import { editFormClose } from '../../actions/comment_feature_actions';
import CommentForm from './comment_form'

const mapStateToProps = (state, ownProps) => {
  const _comment = ownProps.comment || {id: false};
  const commentId = _comment.id;
  const formType = 'edit';
  const open = state.ui.comments.editFormOpen[ownProps.comment.id];
  const errors = state.errors.comment

  return ({
    commentId,
    _comment,
    formType,
    open,
    errors
  })
};

const mapDispatchToProps = dispatch => ({
  processForm: (id, data) => dispatch(editComment(id, data)),
  editFormClose: () => dispatch(editFormClose())
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)
