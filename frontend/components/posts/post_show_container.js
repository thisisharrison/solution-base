import { connect } from "react-redux";
import { fetchPost } from "../../actions/post_actions";
import PostShow from './post_show';
import { selectPost, selectCommentsForPost } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.match.params.postId;
  const post = selectPost(state.entities, postId);
  const comments = selectCommentsForPost(state.entities, post);
  return ({
    postId, 
    post, 
    comments
  })
};

const mapDispatchToProps = dispatch => ({
  fetchPost: id => dispatch(fetchPost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);