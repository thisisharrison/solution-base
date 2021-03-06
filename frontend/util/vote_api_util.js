// vote_api_comment POST   /api/comments/:id/vote
// unvote_api_comment POST   /api/comments/:id/unvote

// vote_api_post POST   /api/posts/:id/vote
// unvote_api_post POST   /api/posts/:id/unvote

export const vote = (id, type) => (
  $.ajax({
    method: 'POST',
    url: `/api/${type}/${id}/vote`
  })
);

export const unvote = (id, type) => (
  $.ajax({
    method: 'POST',
    url: `/api/${type}/${id}/unvote`
  })
);