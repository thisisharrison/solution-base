export const selectPost = ({posts}, postId) => {
  return posts[postId] || { commentIds: [] }
};

export const selectCommentsForPost = ({posts, comments}, post) => {
  let hash = {};
  post.commentIds.map(commentId => comments[commentId])
    .forEach((comment) => {
      let parent = comment.parent_comment_id;
      let children = hash[parent];
      let update;
      if (children) {
        update = { [parent] : [...children, comment] }
      } else {
        update = { [parent] : [comment] }
      }
      hash = Object.assign({}, hash, update);
    })
  return hash;
}