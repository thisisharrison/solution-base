import { connect } from "react-redux";
import { fetchTopic, getTopicsNames } from "../../actions/topic_actions";
import TopicShow from './topic_show';
import { selectTopic, selectPostsForTopic, selectPostOrderForTopic, selectProblemsForTopic, selectSolutionsForTopic } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const topicId = ownProps.match.params.topicId;
  const topic = selectTopic(state.entities, topicId);
  // const posts = selectPostsForTopic(state.entities, topicId);
  const postOrder = selectPostOrderForTopic(state.entities, topicId);
  const problems = selectProblemsForTopic(state.entities, topicId);
  const solutions = selectSolutionsForTopic(state.entities, topicId);
  const topicNames = state.entities.topics.topicNames;
  const loading = state.ui.loading.indexLoading;
  return ({
    topicId, 
    topic,
    // posts,
    postOrder,
    problems,
    solutions,
    topicNames,
    loading
  })
}

const mapDispatchToProps = dispatch => ({
  fetchTopic: id => dispatch(fetchTopic(id)),
  getTopicsNames: () => dispatch(getTopicsNames())
})

export default connect(mapStateToProps, mapDispatchToProps)(TopicShow);