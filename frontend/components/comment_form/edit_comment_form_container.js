import { connect } from 'react-redux'
import { editComment } from '../../actions/comment_actions'
import CommentForm from './comment_form'

const mapStateToProps = (state, ownProps) => {
  const _comment = ownProps.comment || {id: false};
  const commentId = _comment.id;
  const formType = 'edit';
  const open = state.ui.comments.editFormOpen[ownProps.comment.id];
  return ({
    commentId,
    _comment,
    formType,
    open
  })
};

const mapDispatchToProps = dispatch => ({
  processForm: (id, data) => dispatch(editComment(id, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)
