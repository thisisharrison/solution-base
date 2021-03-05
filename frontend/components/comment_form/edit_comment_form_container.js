import { connect } from 'react-redux'
import { editComment } from '../../actions/comment_actions'
import CommentForm from './comment_form'

const mapStateToProps = (state, ownProps) => ({
  commentId: ownProps.match.params.commentId || null,
  formType: 'edit'
});

const mapDispatchToProps = dispatch => ({
  processForm: (id, data) => dispatch(editComment(id, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)
