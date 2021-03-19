import React, { useState, useEffect } from 'react'
import { PostTypeIcon } from './post_type_icon';
import Badge from 'react-bootstrap/Badge';
import styled from 'styled-components';

const PostBadge = styled(Badge)`
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 12px #00000017;
  border-radius: 18px;
  opacity: 1;
  margin-right: 0.5rem;
  color: #585858;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  width: 20%;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  &:hover {
    box-shadow: 0 9px 36px #00000030;
  }
`

export const PostPillIndex = ({ content, postType }) => {
  const [ posts, setPosts ] = useState(() => content);

  useEffect(() => {
    setPosts(content);
  }, [content]);

  const handleClick = e => {
    e.preventDefault;
  }

  return (
    <div className="associated-posts-container">
      {posts && posts.map(post => {
        if (post) {
        return (
        <PostBadge pill variant="light" key={`pill-${post.id}`} onClick={handleClick}>
          <PostTypeIcon color={postType === 'problem' ? 'primary' : 'secondary'}/>
          {post.title}
        </PostBadge>
        )
        }
      })}
    </div>
  )
}
