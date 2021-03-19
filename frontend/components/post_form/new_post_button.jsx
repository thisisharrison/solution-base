import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { showPostForm } from '../../actions/post_actions';
import NewPostFormContainer from './new_post_form_container';

export const NewPost = styled.button`
  background-color: transparent;
  border: 1px dashed #DEDEDE;
  border-radius: 8px;
  color: #62BCCC;
  padding: 1.375rem 1.9375rem 1.375rem 1.9375rem;
  :hover {
    border-color:#62BCCC; 
  }
`

const NewPostButton = ({showPostForm}) => {
  const [show, setShow] = useState(false);
  const handleClick = e => {
    showPostForm();
    setShow(true);
  }
  return (
    <>
      <NewPost onClick={handleClick}>+ Add Your Idea</NewPost>
      { show && <NewPostFormContainer /> }
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  showPostForm: () => dispatch(showPostForm('postNew'))
});

export default connect(null, mapDispatchToProps)(NewPostButton);