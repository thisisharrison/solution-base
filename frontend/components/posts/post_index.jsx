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
      {loading ? null : content.map(post => {
        if (post) {
          return <PostIndexItem key={`post-${post.id}`} post={post} />
        }
      })}
    </div>
  )
}

export default PostIndex;