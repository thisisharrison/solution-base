import React from 'react'
import { Card } from 'react-bootstrap'
import VoteToggle from '../vote/vote_toggle'
import CommentButton from '../comment_form/comment_button'
import { CommentCard } from './comment_index_item_style';
import NewCommentFormContainer from '../comment_form/new_comment_form_container';
import EditCommentFormContainer from '../comment_form/edit_comment_form_container';
import { useSelector } from 'react-redux';

const CommentIndexItem = ({ comment, currentUserId }) => {
  
  const editFormOpen = useSelector(state => state.ui.comments.editFormOpen[comment.id]);
  
  const authButtons = currentUserId === comment.author.id ? (
    <>
      <CommentButton cta='edit' comment={comment} /> 
      <CommentButton cta='delete' comment={comment} /> 
    </>
  ): null;
  
  if (editFormOpen) {
    return (
      <>
        <div className="comment-header">
          <div className="comment-user">
            <p>{comment.author.username}</p>
            {authButtons}
          </div>
        </div>
        <EditCommentFormContainer comment={comment}/>
      </>
    )
  }

  return (
    <>
      <div className="comment-header">
        <div className="comment-user">
          <p>{comment.author.username}</p>
          {authButtons}
        </div>
        <VoteToggle hasVoted={comment.hasVoted} type="comments" id={comment.id} votes={comment.votes}/>
      </div>
      <CommentCard bg="light" text="dark">
        <Card.Body>
          <Card.Text>{comment.body}</Card.Text>
          {/* Debugging */}
          {/* <Card.Text>Vote count: {comment.votes}</Card.Text>
          <pre>{JSON.stringify(comment.hasVoted,undefined, 2)}</pre> */}
          <footer>
            <small className="comment-date">Published: {'2021/Hello/World'}</small>
            <CommentButton cta='reply' parentCommentId={comment.id}/>
          </footer>
        </Card.Body>
      </CommentCard>
      <NewCommentFormContainer postId={comment.postId} parentCommentId={comment.id}/>
    </>
  )
}

export default CommentIndexItem;