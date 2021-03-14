import React, { useState, useEffect } from 'react'
import { ListGroupItem } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removeTopicFitler, updateSort } from '../../actions/filter_actions';

const TopicIndexItem = ({ topic, updateTopicFilter }) => {
  
  const filteredTopic = useSelector(state => state.filter.homepage.topicId);
  const sorting = useSelector(state => state.filter.homepage.sort);

  const [active, setActive] = useState(() => filteredTopic === topic.id);

  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault;
    if (!active) {
      updateTopicFilter({ topic_id: topic.id });
      setActive(true);
    } else {
      dispatch(removeTopicFitler());
      // useSelector to get prevSorting
      dispatch(updateSort(null, {sort: sorting}, "homepage"));
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