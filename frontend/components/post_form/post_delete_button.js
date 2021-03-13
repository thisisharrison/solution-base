import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import { deletePost } from '../../actions/post_actions';

const PostDelete = ({ id, deletePost, history }) => {
  const handleClick = e => {
    e.preventDefault();
    new Promise (resolve => resolve(deletePost(id))).then(() => 
      history.push('/')
    );
  }

  return (
    <Button variant="danger" onClick={handleClick}>Delete Post</Button>
  )
}


const mapStateToProps = (state, ownProps) => ({
  id: ownProps.id
})

const mapDispatchToProps = dispatch => ({
  deletePost: id => dispatch(deletePost(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostDelete))
