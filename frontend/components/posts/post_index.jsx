import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
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
      <Table responsive>
        <tbody>
          {loading ? null : content.map(post => {
            if (post) {
              return <PostIndexItem key={`post-${post.id}`} post={post} />
            }
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default PostIndex;