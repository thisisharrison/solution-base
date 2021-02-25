import React, { useEffect } from 'react'

export default function PostShow({ postId, post, comments, fetchPost }) {
  
  useEffect(() => {
    fetchPost(postId)
  }, [postId])
  
  return (
    <div>
      <h2>Post</h2>
      <pre>{JSON.stringify(post, undefined, 2)}</pre>
      <h2>Comments</h2>
      <pre>{JSON.stringify(comments, undefined, 2)}</pre>
    </div>
  )
}
