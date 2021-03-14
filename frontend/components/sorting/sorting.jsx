import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Sorting = ({ topicId, updateSort, sortType }) => {
  
  const homeSorting = useSelector(state => state.filter.homepage.sort);
  const topicSorting = useSelector(state => state.filter.topic.sort);

  const [active, setActive] = useState(() => {
    switch (sortType) {
      case 'topic':
        return topicSorting;
      case 'homepage':
        return homeSorting;
      default:
        return null;
    }
  });
  
  const handleClick = e => {
    e.preventDefault;
    let payload = {};
    if (e.target.name === active) {
      setActive(null)
    } else {
      setActive(e.target.name);
      payload = {
        sort: e.target.name
      };
    }
    if (topicId) {
      payload = {...payload, topic_id: topicId }
    };
    updateSort(topicId, payload, sortType);
  };

  const buttons = ['most recent', 'most comments', 'most votes']
    .map(name => (
      <button onClick={handleClick}
        name={name}
        key={name}
      >
        {name} {active === name ? '✅ ' : null}
      </button>
      ))
  return (
    <div>
      {buttons}
    </div>
  )
}

export default Sorting;