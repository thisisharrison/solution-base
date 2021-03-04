import { connect } from "react-redux"
import { selectBookmarkIds } from "../../reducers/selectors"
import Bookmark from './bookmark'

const mapStateToProps = (state, ownProps) => ({
  // bookmarkableType: ownProps.bookmarkableType,
  topics: selectBookmarkIds(state, 'topicIds'),
  posts: selectBookmarkIds(state, 'postIds')
})

const mapDispatchToProps = dispatch => ({
  // destroy bookmark
  // create bookmark
})

export default connect(mapStateToProps, null)(Bookmark);