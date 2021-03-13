import { connect } from "react-redux"
import { PostNotice } from './post_notice'

const mapStateToProps = ({entities}) => ({
  post: entities.posts.new || { id: false }
})

export default connect(mapStateToProps, null)(PostNotice);