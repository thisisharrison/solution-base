import React, { createContext, useEffect, useState } from 'react'
import PostIndexItem from './post_index_item';
import PostDetail from './post_detail';
import CommentIndexItem from '../comments/comment_index_item';
import NewCommentFormContainer from '../comment_form/new_comment_form_container';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { CommentIndexCard } from '../comments/comment_index_style';
import { Table } from 'react-bootstrap'
import PostIndex from './post_index';

export default function PostShow({ postId, post, comments, fetchPost, problem, solutions, postOwner, currentUserId, showingPreview }) {
  
  const [content, setContent] = useState({});

  useEffect(() => {
    fetchPost(postId)
  }, [postId]);
  
  useEffect(() => {
    const newContent = Object.assign({}, {
      problem,
      solutions
    });
    setContent(newContent);
  }, [problem, solutions])

  function renderComments(id) {
    return (
      <>
        {comments[id].map(comment => (
          <>
            {singleComment(comment)}
            <ul>
              {comments[comment.id] && <li>{renderComments(comment.id)}</li>}
            </ul>
          </>
        ))}
      </>
    )
  }

  function singleComment(comment) {
    return <CommentIndexItem comment={comment} key={`comment-${comment.id}`} currentUserId={currentUserId}/>
    // return <pre>{JSON.stringify(comment, undefined, 2)}</pre>
  }

  const isProblem = post.post_type === 'problem';

  const isNullProblem = post.problem_id === null;

  return (
    <div>
        <Container>

          <PostDetail post={post} postOwner={postOwner} 
            problem={content.problem} 
            solutions={content.solutions}
            showingPreview={showingPreview}/>
          {/* <pre>{JSON.stringify(post, undefined, 2)}</pre> */}
          
          <h2 className="post-show-h2">{post.commentIds.length} Comments</h2>
          
          <NewCommentFormContainer postId={post.id}/>
          
          <CommentIndexCard>
            <Card.Body>
              {Object.keys(comments).length ? renderComments(null) : 
              (<p>No Comments</p>)}
            </Card.Body>
          </CommentIndexCard>

          {isProblem ? (
            <>
              <h2 className="post-show-h2">Solutions</h2>
              {content.solutions ? 
              <PostIndex posts={content.solutions} />
              : (<p>No Solutions</p>)
              }
            </>
          ) : null}
          
          {isNullProblem ? null : (
            <>
              <h2 className="post-show-h2">Problem</h2>
              <Table responsive>
                <tbody>
                  {content.problem ? 
                  <PostIndexItem post={content.problem} />
                  : null}
                </tbody>
              </Table>
            </>
          )}
      
        </Container>
    </div>
  )
}