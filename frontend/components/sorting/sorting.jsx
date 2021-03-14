import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Sorting = ({ topicId, updateSort, sortType }) => {
  
  const homeSorting = useSelector(state => state.filter.homepage);
  const topicSorting = useSelector(state => state.filter.topic);

  const [active, setActive] = useState(() => {
    switch (sortType) {
      case 'topic':
        return topicSorting.sort;
      case 'homepage':
        return homeSorting.sort;
      default:
        return null;
    }
  });
  
  const handleClick = e => {
    e.preventDefault;
    let payload = {
      key: sortType,
      sort: sortType === 'topic' ? topicSorting.sort : homeSorting.sort,
      post_type: sortType === 'topic' ? topicSorting.postType : homeSorting.postType,
    };
    if (e.target.name === active) {
      setActive(null)
    } else {
      setActive(e.target.name);
      payload.sort = e.target.name
    }
    if (topicId) {
      payload.topic_id = topicId;
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