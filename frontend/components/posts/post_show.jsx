import React, { useEffect, useState } from 'react'
import PostIndexItem from './post_index_item';
import PostDetail from './post_detail';
import CommentIndexItem from '../comments/comment_index_item';
import NewPostButton from '../post_form/new_post_button'
import CommentButton from '../comment_form/comment_button'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { CommentIndexCard } from '../comments/comment_index_style';
import { Table } from 'react-bootstrap'
import PostIndex from './post_index';

export default function PostShow({ postId, post, comments, fetchPost, problem, solutions, postOwner, currentUserId }) {
  
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
            solutions={content.solutions}/>
          {/* <pre>{JSON.stringify(post, undefined, 2)}</pre> */}
          
          <h2 className="post-show-h2">Comments</h2>
          <CommentButton cta='comment' postId={post.id}/>
          
          <CommentIndexCard>
            <Card.Body>
              {Object.keys(comments).length ? renderComments(null) : null}
            </Card.Body>
          </CommentIndexCard>

          {isProblem ? (
            <>
              <h2 className="post-show-h2">Solutions</h2>

              {/* <NewPostButton problem_id={post.id} cta="Add Solution"/> */}
              {content.solutions ? 
              <PostIndex posts={content.solutions} />
              // (content.solutions.map(solution => <PostIndexItem key={solution.id} post={solution} />)) : 
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