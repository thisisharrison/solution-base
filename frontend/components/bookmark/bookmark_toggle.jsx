import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { bookmark, unbookmark } from '../../actions/bookmark_actions';

export default function BookmarkToggle({ hasBookmarked, id, type }) {
  const [ _bookmark, setBookmark ] = useState(() => hasBookmarked || false);

  useEffect(() => {
    setBookmark(hasBookmarked)
  }, [hasBookmarked]);

  const dispatch = useDispatch();

  const updateBookmark = () => {
    _bookmark ? dispatch(unbookmark(id, type)) : dispatch(bookmark(id, type))
  };

  return (
    <Button variant={_bookmark ? "outline-secondary" : "secondary"} onClick={updateBookmark}>{_bookmark ? 'Unbookmark' : 'Bookmark'}</Button>
  )
}
