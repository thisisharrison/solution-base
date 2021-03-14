import { connect } from 'react-redux';
import { updateSort, removeSort } from '../../actions/filter_actions';
import Sorting from './sorting';

const mapStateToProps = (state, ownProps) => {
  // null stands for homepage sorting
  const topicId = ownProps.topicId;
  const sortType = ownProps.sortType;
  return ({
    topicId,
    sortType
  });
};

const mapDispatchToProps = dispatch => ({
  updateSort: (id, sort, key) => dispatch(updateSort(id, sort, key)),
  removeSort: key => dispatch(removeSort(key))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);