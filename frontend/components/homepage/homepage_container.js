import { connect } from "react-redux";
import { fetchPosts } from "../../actions/post_actions";
import { getTopicsNames } from "../../actions/topic_actions";
import Homepage from "./homepage";

const mapStateToProps = ({entities}) => ({
  topicNames: entities.topics.topicNames
});

const mapDispatchToProps = data => dispatch => ({
  fetchPosts: data => dispatch(fetchPosts(data)),
  getTopicNames: () => dispatch(getTopicsNames())
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);