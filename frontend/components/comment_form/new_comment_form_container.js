import { connect } from 'react-redux'
import { createComment } from '../../actions/comment_actions'
import CommentForm from './comment_form'

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.postId; 
  // parentCommentId: ownProps.location.state.parentCommentId || null,
  
  // handle new comment first
  const open = state.ui.comments.newFormOpen
  const formType = 'create';
  
  return ({
    postId,
    formType,
    open
  })
};

const mapDispatchToProps = dispatch => ({
  processForm: (postId, data) => dispatch(createComment(postId, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)
