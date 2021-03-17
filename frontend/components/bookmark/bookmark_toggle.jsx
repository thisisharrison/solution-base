import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { bookmark, unbookmark } from '../../actions/bookmark_actions';
import IconButton from '@material-ui/core/IconButton';
import { BookmarkButton, BookmarkOutlinedIcon, BookmarkFilledIcon } from './bookmark_icon';

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
    <BookmarkButton onClick={updateBookmark}>
      <>
        {_bookmark ? 
        <BookmarkFilledIcon />
        :
        <BookmarkOutlinedIcon />
        }
        Bookmark
      </>
    </BookmarkButton>
  )
}
