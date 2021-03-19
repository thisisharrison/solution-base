import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components';
import { showPostForm } from '../../actions/post_actions';

export const SmallLink = styled.button`
  font-size: 0.75rem;
  color: #62BCCC;
`
// modal is in post detail with problemId prop
export const PostReplyButton = ({ showPostForm }) => {
  return (
    <>
      <SmallLink onClick={showPostForm}>
        + Add Solution
      </SmallLink>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  showPostForm: () => dispatch(showPostForm('postNew'))
})

export default connect(null, mapDispatchToProps)(PostReplyButton)
