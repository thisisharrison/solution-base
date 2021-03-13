import { connect } from 'react-redux';
import { updateSort } from '../../actions/filter_actions';
import { selectPrevSort } from '../../reducers/selectors';
import Sorting from './sorting';

const mapStateToProps = (state, ownProps) => {
  // null stands for homepage sorting
  const topicId = ownProps.topicId;
  const sortType = ownProps.sortType;
  // future enhancement to save user's sort and filter preference 
  // const prevSort = selectPrevSort(state.filter, topicId);
  return ({
    topicId,
    sortType
  });
};

const mapDispatchToProps = dispatch => ({
  updateSort: (id, sort, key) => dispatch(updateSort(id, sort, key))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);