// bookmark_api_post POST   /api/posts/:id/bookmark
// unbookmark_api_post POST   /api/posts/:id/unbookmark

// bookmark_api_topic POST   /api/topics/:id/bookmark
// unbookmark_api_topic POST   /api/topics/:id/unbookmark

export const bookmark = (id, type) => (
  $.ajax({
    method: 'POST',
    url: `/api/${type}/${id}/bookmark`
  })
);

export const unbookmark = (id, type) => (
  $.ajax({
    method: 'POST',
    url: `/api/${type}/${id}/unbookmark`
  })
);