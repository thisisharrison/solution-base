export const fetchPosts = data => (
  $.ajax({
    method: 'GET',
    url: 'api/posts',
    data
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

export const editPost = (id, formData) => (
 $.ajax({
    method: 'PATCH',
    url: `api/posts/${id}`,
    data: formData,
    contentType: false,
    processData: false
  }) 
)

export const deletePost = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/posts/${id}`
  })
)