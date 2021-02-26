export const getTopicsNames = () => (
  $.ajax({
    method: 'GET',
    url: '/api/topics_names'
  })
);

export const fetchTopic = id => (
  $.ajax({
    method: 'GET',
    url: `/api/topics/${id}`
  })
);