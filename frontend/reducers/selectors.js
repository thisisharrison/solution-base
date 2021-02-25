export const selectPost = ({posts}, postId) => {
  return posts[postId] || { commentIds: [] }
};

export const selectCommentsForPost = ({posts, comments}, post) => {
  return post.commentIds.map(commentId => comments[commentId])
};
