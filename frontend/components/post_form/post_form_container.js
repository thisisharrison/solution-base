import { connect } from "react-redux";
import { createPost } from "../../actions/post_actions";
import PostForm from './post_form'

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({
  createPost: formData => dispatch(createPost(formData))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);