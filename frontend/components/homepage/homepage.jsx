import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getTopicsNames } from '../../util/topic_api_util'

export default function Homepage() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getTopicsNames().then(names => {
      setTopics(names)
    })
  }, [])
  return (
    <div>
      HomePage
      <ul>
        {topics.map(topic => <Link key={topic.id} to={`/topics/${topic.id}`}>{topic.name}</Link>)}
      </ul>
    </div>
  )
}
