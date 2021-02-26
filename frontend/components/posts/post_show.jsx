import React, { useEffect } from 'react'

export default function PostShow({ postId, post, comments, fetchPost }) {
  
  useEffect(() => {
    fetchPost(postId)
  }, [postId]);
  
  // function renderComments(comments) {
  //   debugger
  //   return Object.keys(comments).map(id => (
  //     comments[id].map(comment => 
  //     (
  //     <>
  //       {singleComment(comment)}
  //     </>
  //     ))
  //   ))
  // }
  function renderComments(id) {
    console.log(id)
    
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
    return <pre>{JSON.stringify(comment, undefined, 2)}</pre>
  }

  return (
    <div>
      <h2>Post</h2>
      <pre>{JSON.stringify(post, undefined, 2)}</pre>
      <h2>Comments</h2>
      {Object.keys(comments).length ? renderComments(null) : null}
      {/* <pre>{JSON.stringify(comments, undefined, 2)}</pre> */}
    </div>
  )
}
