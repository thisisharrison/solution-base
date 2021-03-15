import React from 'react'
import { Card, Badge, Container, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import moment from 'moment-timezone'
import BookmarkToggle from '../bookmark/bookmark_toggle'
import NewPostButton from '../post_form/new_post_button'
import PostDeleteButton from '../post_form/post_delete_button'
import VoteToggle from '../vote/vote_toggle'
import { Post, PostContent, PostBody, PostTag, PostRight } from './post_index_item_style'

export default function PostIndexItem({ post, postOwner }) {

  // if (!post) return null
  if (!post.id) return null
  
  const date = moment(post.created_at).calendar();

  return (
    <>
    <tr>
      <td>
        <Post>
          <PostContent>
            <LinkContainer to={`/posts/${post.id}`}>
              <h5>{post.title}</h5>
            </LinkContainer>
            
            <PostBody>
              <div>
                <p className="wrap">{post.body}</p>
              </div>
            </PostBody>

            {post.topics && post.topics.map(topic => (
              <LinkContainer key={`post-${post.id}-pill-${topic.id}`} to={`/topics/${topic.id}`}>
                <PostTag>{`#${topic.name} `}</PostTag>
              </LinkContainer>
            ))}
            
            <small className="muted">{date}</small>
          </PostContent>
              
          {/* <p>Vote count: {post.votes}</p> */}
          <PostRight>
            <VoteToggle hasVoted={post.hasVoted} type="posts" votes={post.votes} id={post.id}/>
            <small className="muted">{post.author.username}</small>
          </PostRight>
        </Post>

          {/* <p>Comment count: {post.commentCount}</p> */}
          {/* <pre>Post Type: {JSON.stringify(post.post_type, undefined, 2)}</pre>
          <pre>Vote Status: {JSON.stringify(post.hasVoted, undefined, 2)}</pre>
          <pre>Bookmark Status: {JSON.stringify(post.hasBookmarked, undefined, 2)}</pre> */}

          {/* <BookmarkToggle hasBookmarked={post.hasBookmarked} type="posts" id={post.id}/> */}


          {/* {postOwner ? <NewPostButton cta="Edit Post" pathname={`/posts/${post.id}/edit`} post={post} /> : null}
          {postOwner ? <PostDeleteButton id={post.id} /> : null} */}

      </td>
    </tr>
      
    </>
  )
}