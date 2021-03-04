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

export const createPost = formData => (
  $.ajax({
    method: 'POST',
    url: 'api/posts/',
    data: formData,
    contentType: false,
    processData: false
  })
)