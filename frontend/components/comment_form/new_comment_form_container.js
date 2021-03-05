import { connect } from 'react-redux'
import { createComment } from '../../actions/comment_actions'
import CommentForm from './comment_form'

const mapStateToProps = (state, ownProps) => ({
  postId: ownProps.match.params.postId || null,
  parentCommentId: null,
  formType: 'create'
});

const mapDispatchToProps = dispatch => ({
  processForm: (postId, data) => dispatch(createComment(postId, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)
