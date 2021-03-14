import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updatePostTypeFilter, removePostTypeFilter } from '../../actions/filter_actions'

export const PostTypeFilter = ({currentFilter, currentPostType, updatePostTypeFilter, removePostTypeFilter}) => {
  
  const [postType, setType] = useState(() => currentPostType);
  
  const handleClick = e => {
    e.preventDefault();
    let payload = {
      key: 'homepage',
      sort: currentFilter.sort,
      topic_id: currentFilter.topicId
    }
    if (e.target.name !== postType) {
      payload.post_type = e.target.name;
      updatePostTypeFilter(payload)
      setType(e.target.name);
    } else {
      removePostTypeFilter();
      // set postType to undefined
      updatePostTypeFilter(payload);
      setType(null);
    }
  }

  const buttons = ['problem', 'solution'].map(type => {
    return (
      <button
        name={type}
        key={type}
        onClick={handleClick}
      >
        {type} {type === postType ? '✅ ' : null}
      </button>
    )
  })

  return (
    <div>
      {buttons}
    </div>
  )
}

const mapStateToProps = ({filter}) => ({
  currentPostType: filter.homepage.postType || null,
  currentFilter: filter.homepage
})

const mapDispatchToProps = dispatch => ({
  updatePostTypeFilter: data => dispatch(updatePostTypeFilter(data)),
  removePostTypeFilter: () => dispatch(removePostTypeFilter())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostTypeFilter);
