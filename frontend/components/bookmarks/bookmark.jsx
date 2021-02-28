import React from 'react'

export default function Bookmark({ topics, posts }) {
  return (
    <div>
      <h2>Topics</h2>
      <pre>{JSON.stringify(topics, undefined, 2)}</pre>
      <h2>Posts</h2>
      <pre>{JSON.stringify(posts, undefined, 2)}</pre>
    </div>
  )
}
