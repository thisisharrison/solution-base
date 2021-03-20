import { connect } from 'react-redux'
import { createComment } from '../../actions/comment_actions'
import { newFormClose, replyFormClose } from '../../actions/comment_feature_actions';
import CommentForm from './comment_form'

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.postId; 
  const parentCommentId = ownProps.parentCommentId || null;
  const formType = 'create';
  const open = parentCommentId ? state.ui.comments.replyFormOpen[parentCommentId] : state.ui.comments.newFormOpen;
  
  return ({
    postId,
    parentCommentId,
    formType,
    open
  })
};

const mapDispatchToProps = dispatch => ({
  processForm: (postId, data) => dispatch(createComment(postId, data)),
  replyFormClose: () => dispatch(replyFormClose()),
  newFormClose: () => dispatch(newFormClose())
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)
