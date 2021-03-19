import React from 'react'
import { connect } from 'react-redux'
import { MutedLink } from './post_delete_button';
import { showPostForm } from '../../actions/post_actions';
import EditPostFormContainer from './edit_post_form_container';

export const PostEditButton = ({ post, showPostForm }) => {
  return (
    <div>
      <MutedLink as="button" onClick={showPostForm}>
        Edit
      </MutedLink>
      <EditPostFormContainer post={post}/>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  post: ownProps.post
})

const mapDispatchToProps = dispatch => ({
  showPostForm: () => dispatch(showPostForm('postEdit'))
});


export default connect(mapStateToProps, mapDispatchToProps)(PostEditButton);
