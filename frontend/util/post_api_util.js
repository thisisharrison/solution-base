export const fetchPosts = () => (
  $.ajax({
    method: 'GET',
    uril: 'api/posts'
  })
)

export const fetchPost = id => (
  $.ajax({
    method: 'GET',
    url: `api/posts/${id}`
  })
)