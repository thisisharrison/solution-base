import React, { useEffect } from 'react'

export default function TopicShow({ topicId, topic, posts, problems, solutions, fetchTopic }) {
  
  useEffect(() => {
    fetchTopic(topicId);
  }, [topicId])
  
  return (
    <div>
      Topic Show
      <h2>Topic</h2>
      <pre>{JSON.stringify(topic.topic, undefined, 2)}</pre>
      <h2>Problems</h2>
      <small>Count: {Object.keys(problems).length}</small>
      <pre>{JSON.stringify(problems, undefined, 2)}</pre>
      <h2>Solutions</h2>
      <small>Count: {Object.keys(solutions).length}</small>
      <pre>{JSON.stringify(solutions, undefined, 2)}</pre>
      <h2>All Posts</h2>
      <small>Count: {Object.keys(posts).length}</small>
      <pre>{JSON.stringify(posts, undefined, 2)}</pre>
    </div>
  )
}
