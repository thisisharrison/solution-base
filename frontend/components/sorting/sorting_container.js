import { connect } from 'react-redux';
import { fetchTopic } from '../../actions/topic_actions';
import Sorting from './sorting';

const mapDispatchToProps = dispatch => ({
  fetchTopic: (id, data) => dispatch(fetchTopic(id, data))
});

export default connect(null, mapDispatchToProps)(Sorting);