import React from 'react'

const Sorting = ({ fetchTopic }) => {
  const handleClick = e => {
    e.preventDefault;
    const payload = {filter: e.target.name};
    fetchTopic(id, payload);
  }
  return (
    <div>
      Search
      <button onClick={handleClick} name="recent posts">most recent</button>
      <button onClick={handleClick} name="most commented">most commented</button>
      <button onClick={handleClick} name="most votes">most votes</button>
    </div>
  )
}

export default Sorting;