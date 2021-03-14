import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Sorting = ({ topicId, updateSort, removeSort, sortType }) => {
  
  const homeFilter = useSelector(state => state.filter.homepage);
  const topicFilter = useSelector(state => state.filter.topic);

  const [currentSort, setCurrentSort] = useState(() => {
    switch (sortType) {
      case 'topic':
        return topicFilter.sort;
      case 'homepage':
        return homeFilter.sort;
      default:
        return null;
    }
  });
  
  const handleClick = e => {
    e.preventDefault;
    let payload = sortType === 'topic' ? topicFilter : homeFilter;
    payload.key = sortType;

    if (e.target.name === currentSort) {
      setCurrentSort(null);
      removeSort(sortType)
      payload.sort = undefined;
    } else {
      setCurrentSort(e.target.name);
      payload.sort = e.target.name
    }
    updateSort(topicId, payload, sortType);
  };

  const buttons = ['most recent', 'most comments', 'most votes']
    .map(name => (
      <button onClick={handleClick}
        name={name}
        key={name}
      >
        {name} {currentSort === name ? '✅ ' : null}
      </button>
      ))
  return (
    <div>
      {buttons}
    </div>
  )
}

export default Sorting;