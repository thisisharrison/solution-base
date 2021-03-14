import { connect } from "react-redux";
import { updateSort, updateTopicFilter } from "../../actions/filter_actions";
import { fetchPosts } from "../../actions/post_actions";
import { getTopicsNames } from "../../actions/topic_actions";
import { selectPostForHomePage } from '../../reducers/selectors';
import Homepage from "./homepage";

const mapStateToProps = state => ({
  topicNames: state.entities.topics.topicNames,
  posts: selectPostForHomePage(state.entities.posts),
  loading: state.ui.loading.indexLoading,
  filterTopicId: state.filter.homepage.topic_id || null,
  homeFilter: state.filter.homepage
});

const mapDispatchToProps = data => dispatch => ({
  fetchPosts: data => dispatch(fetchPosts(data)),
  updateSort: (id, sort, key) => dispatch(updateSort(id, sort, key)),
  getTopicNames: () => dispatch(getTopicsNames()),
  updateTopicFilter: data => dispatch(updateTopicFilter(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);