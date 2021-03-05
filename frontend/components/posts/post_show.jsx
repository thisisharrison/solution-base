import React, { useEffect, useState } from 'react'
import PostIndexItem from './post_index_item';
import CommentIndexItem from '../comments/comment_index_item';
import NewPostButton from '../post_form/new_post_button'
import { selectSolutionsForPost } from '../../reducers/selectors';
import { useSelector } from 'react-redux';

export default function PostShow({ postId, post, comments, fetchPost, problem, solutions, postOwner }) {
  
  const [ data, setData ] = useState(() => post)

  useEffect(() => {
    fetchPost(postId)
    setData(post)
  }, []);
  
  function renderComments(id) {
    return (
      <>
        {comments[id].map(comment => (
          <>
            {singleComment(comment)}
            <ul>
              {comments[comment.id] && <li>{renderComments(comment.id)}</li>}
            </ul>
          </>
        ))}
      </>
    )
  }

  function singleComment(comment) {
    return <CommentIndexItem comment={comment} key={`comment-${comment.id}`}/>
    // return <pre>{JSON.stringify(comment, undefined, 2)}</pre>
  }

  const isProblem = post.post_type === 'problem';

  const isNullProblem = post.problem_id === null;

  return (
    <div>
      <h2>Post</h2>
      <PostIndexItem post={post} postOwner={postOwner}/>
      {/* <pre>{JSON.stringify(post, undefined, 2)}</pre> */}
      <h2>Comments</h2>
      {Object.keys(comments).length ? renderComments(null) : null}
      {isProblem ? (
        <>
          <h2>Solutions</h2>
          <NewPostButton problem_id={post.id} cta="Add Solution"/>
          {solutions.length ? 
          (solutions.map(solution => <PostIndexItem key={solution.id} post={solution} />)) : 
          (<p>No Solutions</p>)
          }
          {/* <pre>{JSON.stringify(solutions, undefined, 2)}</pre> */}
        </>
        ) : isNullProblem ? null : (
        <>
          <h2>Problem</h2>
          <PostIndexItem post={problem} />
          {/* <pre>{JSON.stringify(problem, undefined, 2)}</pre> */}
        </>
        )}
      

    </div>
  )
}
