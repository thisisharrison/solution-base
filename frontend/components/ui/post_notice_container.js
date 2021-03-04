import { connect } from "react-redux"
import { PostNotice } from './post_notice'

const mapStateToProps = ({ui}) => ({
  post: ui.notice.post || { id: false }
})

export default connect(mapStateToProps, null)(PostNotice);