import { connect } from "react-redux";
import { fetchPosts } from "../../actions/post_actions";
import { getTopicsNames } from "../../actions/topic_actions";
import { selectPostForHomePage } from '../../reducers/selectors';
import Homepage from "./homepage";

const mapStateToProps = ({entities}) => ({
  topicNames: entities.topics.topicNames,
  posts: selectPostForHomePage(entities.posts)
});

const mapDispatchToProps = data => dispatch => ({
  fetchPosts: data => dispatch(fetchPosts(data)),
  getTopicNames: () => dispatch(getTopicsNames())
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);