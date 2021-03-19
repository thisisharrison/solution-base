import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import { deletePost } from '../../actions/post_actions';
import styled from 'styled-components';

export const MutedLink = styled(Link)`
  color: #898989;
  font-size: 0.75rem;
  font-weight: normal;
  &:hover {
    color: #707070;
  }
`

const PostDelete = ({ id, deletePost, history }) => {
  const handleClick = e => {
    e.preventDefault();
    new Promise (resolve => resolve(deletePost(id))).then(() => 
      history.push('/')
    );
  }

  return (
    <MutedLink as="button" onClick={handleClick}>
      Delete
    </MutedLink>
  )
}


const mapStateToProps = (state, ownProps) => ({
  id: ownProps.id
})

const mapDispatchToProps = dispatch => ({
  deletePost: id => dispatch(deletePost(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostDelete))
