import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import moment from 'moment-timezone'
import BookmarkToggle from '../bookmark/bookmark_toggle'
import NewPostButton from '../post_form/new_post_button'
import PostDeleteButton from '../post_form/post_delete_button'
import VoteToggle from '../vote/vote_toggle'
import { Post, PostContent, PostBody, PostTag, PostRight } from './post_index_item_style';
import { StyledChatBubble } from './comment_icon';
import { PostPillIndex } from './post_pill_index';
import { PostTypeIcon } from './post_type_icon';
import { Card } from 'react-bootstrap'

export default function PostDetail({ post, postOwner, problem, solutions }) {

  // if (!post) return null
  if (!post.id) return null
  
  const date = moment(post.created_at).calendar();

  return (
    <>
      {post.topics && post.topics.map(topic => (
        <LinkContainer key={`post-${post.id}-pill-${topic.id}`} to={`/topics/${topic.id}`}>
          <PostTag>{`#${topic.name} `}</PostTag>
        </LinkContainer>
      ))}
      <Card>
        <Card.Body>
          <Card.Title>
            <div className="post-detail-header-left">
              <div>
                <h1 className="post-detail-h1">{post.title}</h1>
                <small className="muted">{post.author.username}</small>
                <small className="muted">{date}</small>
              </div>
              <div className="post-detail-header-right">
                <VoteToggle hasVoted={post.hasVoted} type="posts" votes={post.votes} id={post.id}/>
                <PostTypeIcon fontSize="large" color={post.post_type === 'problem' ? 'primary' : 'secondary'}/>
              </div>
            </div>
          </Card.Title>
          <Card.Text>
            {post.body}
          </Card.Text>
          
          <BookmarkToggle hasBookmarked={post.hasBookmarked} type="posts" id={post.id}/>
          
          <NewPostButton problem_id={post.id} cta="Add Solution"/>
          
          {postOwner && <NewPostButton cta="Edit Post" pathname={`/posts/${post.id}/edit`} post={post} /> }
          
          {postOwner && <PostDeleteButton id={post.id} /> }
          
          <PostPillIndex content={problem ? [problem] : solutions} postType={problem ? 'problem' : 'solutions'}/>
        
        </Card.Body>
      </Card>
    </>
  )
}