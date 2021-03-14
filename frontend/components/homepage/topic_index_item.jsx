import React, { useState, useEffect } from 'react'
import { ListGroupItem } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removeTopicFitler, updateSort } from '../../actions/filter_actions';

const TopicIndexItem = ({ topic, updateTopicFilter }) => {
  
  const homeFilter = useSelector(state => state.filter.homepage);
  const filteredTopic = useSelector(state => state.filter.homepage.topic_id);

  const [active, setActive] = useState(() => filteredTopic === topic.id);

  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault;
    let payload = homeFilter;
    if (!active) {
      payload.topic_id = topic.id;
      updateTopicFilter(payload);
      setActive(true);
    } else {
      dispatch(removeTopicFitler());
      payload.topic_id = undefined;
      dispatch(updateSort(null, payload, "homepage"));
      setActive(false);
    }
  }

  useEffect(() => {
    if (filteredTopic && filteredTopic !== topic.id) {
      setActive(false);
    }
  }, [filteredTopic])

  return (
    <ListGroupItem key={topic.id} onClick={handleClick}>
      {topic.name} {topic.posts} {active ? '✅ ' : null}
    </ListGroupItem>
  )
}

export default TopicIndexItem;