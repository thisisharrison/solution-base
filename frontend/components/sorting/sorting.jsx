import React from 'react'

const Sorting = ({ topicId, updateSort }) => {
  const handleClick = e => {
    e.preventDefault;
    updateSort(topicId, e.target.name);
  }
  return (
    <div>
      Search
      <button onClick={handleClick} name="most recent">most recent</button>
      <button onClick={handleClick} name="most comments">most commented</button>
      <button onClick={handleClick} name="most votes">most votes</button>
    </div>
  )
}

export default Sorting;