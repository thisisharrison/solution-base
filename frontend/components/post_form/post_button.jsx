import React from 'react'
import DeleteButton from './post_delete_button';
import EditButton from './post_edit_button';
import ReplyButton from './post_reply_button';
import NewButton from './new_post_button';

const PostButton = ({ type, id = undefined, post = undefined, problem_id = undefined }) => {

  const NewPost = (<NewButton />)
  const EditPost = (<EditButton post={post} />)
  const DeletePost = (<DeleteButton id={id}/>)
  const ReplyPost = (<ReplyButton problem_id={problem_id} />)

  const renderButton = () => {
    switch (type) {
      case 'new': // button
        return NewPost;
      case 'edit': // link
        return EditPost;
      case 'delete': // link
        return DeletePost;
      case 'reply': // link
        return ReplyPost;
      default:
        break;
    }
  }

  return (
    <div>
      {renderButton()}
    </div>
  )
}

export default PostButton;