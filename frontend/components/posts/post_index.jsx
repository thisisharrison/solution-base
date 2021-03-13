import React, { useState, useEffect } from 'react'
import PostIndexItem from './post_index_item'

const PostIndex = ({ posts }) => {

  const [content, setContent] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    setContent(posts);
    setLoading(false);
  }, [posts])
  
  return (
    <div>
      {loading ? null : Object.keys(content).map(id => {
        if (id !== 'new') return <PostIndexItem key={`post-${id}`} post={posts[id]} />
      })}
    </div>
  )
}

export default PostIndex;