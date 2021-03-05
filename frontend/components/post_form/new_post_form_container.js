import { connect } from "react-redux";
import { fetchPost, createPost, editPost } from "../../actions/post_actions";
import { selectPost } from "../../reducers/selectors";
import PostForm from './post_form'

const mapStateToProps = (state, ownProps) => {
  // in response to a problem, we'll pass problem_id and problemPost
  // pass problem_id as props if posting a solution
  const problem_id = ownProps.location.state ? ownProps.location.state.problem_id : false;
  const problemPost = problem_id ? selectPost(state.entities, problem_id) : {};
  const formType = 'create'
  return ({
    problem_id,
    problemPost,
    formType
  })
};

const mapDispatchToProps = dispatch => ({
  processForm: formData => dispatch(createPost(formData)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);