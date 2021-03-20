import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import moment from 'moment-timezone'
import BookmarkToggle from '../bookmark/bookmark_toggle'
import PostButton from '../post_form/post_button';
import VoteToggle from '../vote/vote_toggle'
import { PostTag } from './post_index_item_style';
import { PostPillIndex } from './post_pill_index';
import { PostTypeIcon } from './post_type_icon';
import { Card } from 'react-bootstrap'
import NewPostFormContainer from '../post_form/new_post_form_container'
import CommentButton from '../comment_form/comment_button';

const PostDetail = ({ post, postOwner, problem, solutions }) => {

  // if (!post) return null
  if (!post.id) return null
  
  const date = moment(post.created_at).startOf('day').fromNow();

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
            <div className="post-detail-header">
              <div style={{display: 'flex', alignItems: 'baseline'}}>
                <h1 className="post-detail-h1">{post.title}</h1>
                {postOwner && <PostButton type='delete' id={post.id} /> }
                {postOwner && <PostButton type='edit' post={post} /> }
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
          
          <footer className="post-footer">
            <BookmarkToggle hasBookmarked={post.hasBookmarked} type="posts" id={post.id}/>
            
            {post.post_type === 'problem' &&
            <PostButton type='reply' />}

            <CommentButton cta='comment' postId={post.id} />
          </footer>
          
          <PostPillIndex content={problem ? [problem] : solutions} postType={problem ? 'problem' : 'solutions'}/>
        
          <small className="mute">posted {date}, by {post.author.username}</small>
        </Card.Body>
      </Card>
      { post.post_type === 'problem' && <NewPostFormContainer problemId={post.id} problemPost={post}/>}
    </>
  )
}

export default PostDetail;