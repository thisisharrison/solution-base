import React, { useEffect } from 'react'

export default function TopicShow({ topicId, topic, posts, fetchTopic }) {
  
  useEffect(() => {
    fetchTopic(topicId);
  }, [topicId])
  
  return (
    <div>
      Topic Show
      <h2>Topic</h2>
      <pre>{JSON.stringify(topic, undefined, 2)}</pre>
      <h2>Posts</h2>
      <pre>{JSON.stringify(posts, undefined, 2)}</pre>
    </div>
  )
}
