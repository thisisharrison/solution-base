import { connect } from "react-redux";
import { fetchTopic } from "../../actions/topic_actions";
import TopicShow from './topic_show';
import { selectTopic, selectPostsForTopic } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const topicId = ownProps.match.params.topicId;
  const topic = selectTopic(state.entities, topicId);
  const posts = selectPostsForTopic(state.entities, topicId);
  return ({
    topicId, 
    topic,
    posts
  })
}

const mapDispatchToProps = dispatch => ({
  fetchTopic: id => dispatch(fetchTopic(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TopicShow);