import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import moment from 'moment-timezone'
import BookmarkToggle from '../bookmark/bookmark_toggle'
import NewPostButton from '../post_form/new_post_button'
import PostDeleteButton from '../post_form/post_delete_button'
import PostButton from '../post_form/post_button'
import VoteToggle from '../vote/vote_toggle'
import { Post, PostContent, PostBody, PostTag, PostRight } from './post_index_item_style';
import { StyledChatBubble } from './comment_icon';
import { PostTypeIcon } from './post_type_icon';
import { Link } from 'react-router-dom'

export default function PostIndexItem({ post, postOwner }) {

  // if (!post) return null
  if (!post.id) return null
  
  const date = moment(post.created_at).startOf('day').fromNow();

  return (
    <tr>
      <td>
        <Post>
          <PostContent>
            <LinkContainer to={`/posts/${post.id}`}>
              <h5 className="h5">{post.title}</h5>
            </LinkContainer>
            
            <div className="post-wrap">
              <PostTypeIcon fontSize="small" color={post.post_type === 'problem' ? 'primary' : 'secondary'}/>
              <PostBody>
                <div>
                  <p className="post-exerpt">{post.body}</p>
                </div>
              </PostBody>
            </div>

              
            {post.topics && post.topics.map(topic => (
              <LinkContainer key={`post-${post.id}-pill-${topic.id}`} to={`/topics/${topic.id}`}>
                <PostTag>{`#${topic.name} `}</PostTag>
              </LinkContainer>
            ))}
            
            <footer className="post-footer">
              <small className="comment-count"><StyledChatBubble fontSize="small"/>{post.commentCount}</small>
              <small className="bookmark">
                <BookmarkToggle hasBookmarked={post.hasBookmarked} type="posts" id={post.id}/>
              </small>
              {postOwner && <PostButton type='edit' post={post} /> }
              {postOwner && <PostButton type='delete' id={post.id} /> }
            </footer>
          </PostContent>
              
          <PostRight>
            <VoteToggle hasVoted={post.hasVoted} type="posts" votes={post.votes} id={post.id}/>
            <small className="post-date">posted {date}</small>
            <small className="post-author">{post.author.username}</small>
          </PostRight>
        </Post>
        
        {/* Debugging */}
        {/* <pre>Post Type: {JSON.stringify(post.post_type, undefined, 2)}</pre>
        <pre>Vote Status: {JSON.stringify(post.hasVoted, undefined, 2)}</pre>
        <pre>Bookmark Status: {JSON.stringify(post.hasBookmarked, undefined, 2)}</pre> */}

      </td>
    </tr>
  )
}