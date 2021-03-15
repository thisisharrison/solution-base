import React, { useState, useEffect } from 'react'
import { ListGroupItem } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removeTopicFitler, updateSort } from '../../actions/filter_actions';
import { TopicFilterItem } from './topic_filter_style';

const TopicFilter = ({ topic, updateTopicFilter }) => {
  
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
    <TopicFilterItem key={topic.id} onClick={handleClick} className={active ? 'active' : null}>
      <span className={'topic-name'}>{topic.name}</span> 
      <span className={'num-posts'}>{topic.posts}</span>
    </TopicFilterItem>
  )
}

export default TopicFilter;