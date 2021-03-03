import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';

export default function BookmarkToggle({ hasBookmarked }) {
  const [ bookmark, setBookmark ] = useState(() => hasBookmarked || false);

  const updateBookmark = () => {
    setBookmark(!bookmark);
  };

  return (
    <Button variant="primary" onClick={updateBookmark}>{bookmark ? 'Unbookmark' : 'Bookmark'}</Button>
  )
}
