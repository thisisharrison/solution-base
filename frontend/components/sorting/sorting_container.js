import { connect } from 'react-redux';
import { updateSort } from '../../actions/filter_actions';
import { selectPrevSort } from '../../reducers/selectors';
import Sorting from './sorting';

const mapStateToProps = (state, ownProps) => {
  const topicId = ownProps.topicId;
  // future enhancement to save user's sort and filter preference 
  // const prevSort = selectPrevSort(state.filter, topicId);
  return ({
    topicId
  });
};

const mapDispatchToProps = dispatch => ({
  updateSort: (id, sort) => dispatch(updateSort(id, sort))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);