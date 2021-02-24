export const getTopicsNames = () => (
  $.ajax({
    method: 'GET',
    url: '/api/topics_names'
  })
);