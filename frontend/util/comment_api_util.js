export const fetchComment = commentId => (
  $.ajax({
    method: 'GET',
    url: `api/comments/${commentId}`,
  })
)

export const createComment = (postId, data) => (
  $.ajax({
    method: 'POST',
    url: ` /api/posts/${postId}/comments`,
    data,
  })
)

export const editComment = (id, data) => (
 $.ajax({
    method: 'PATCH',
    url: `api/comments/${id}`,
    data
  }) 
)

export const deleteComment = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/comments/${id}`
  })
)