import React, { useState } from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { connect } from 'react-redux'
import { updatePostTypeFilter, removePostTypeFilter } from '../../actions/filter_actions'

export const PostTypeFilter = ({homeFilter, currentPostType, updatePostTypeFilter, removePostTypeFilter}) => {
  
  const [postType, setType] = useState(() => currentPostType);
  
  const handleClick = e => {
    e.preventDefault();
    let payload = homeFilter;
    if (e.target.name !== postType) {
      payload.post_type = e.target.name;
      updatePostTypeFilter(payload)
      setType(e.target.name);
    } else {
      removePostTypeFilter();
      payload.post_type = undefined;
      updatePostTypeFilter(payload);
      setType(null);
    }
  }

  const buttons = ['problem', 'solution'].map(type => {
    return (
      <Dropdown.Item as="button"
        name={type}
        key={type}
        onClick={handleClick}
        active={postType === type}
      >
        {type} 
      </Dropdown.Item>
    )
  })

  return (
    <div>
      <DropdownButton id="post-type-button" title={ postType ? postType : 'Filter' } variant="transparent">
        {buttons}
      </DropdownButton>
    </div>
  )
}

const mapStateToProps = ({filter}) => ({
  currentPostType: filter.homepage.post_type || null,
  homeFilter: filter.homepage
})

const mapDispatchToProps = dispatch => ({
  updatePostTypeFilter: data => dispatch(updatePostTypeFilter(data)),
  removePostTypeFilter: () => dispatch(removePostTypeFilter())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostTypeFilter);
