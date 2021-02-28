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

export const selectTopic = ({topics}, topicId) => {
  return topics[topicId] || {}
};

export const selectPostsForTopic = ({topics}, topicId) => {
  const topic = topics[topicId];
  if (!topic) {
    return {};
  } else {
    return mapById(topic.posts);
  }
};

export const selectProblemsForTopic = ({topics}, topicId) => {
  const topic = topics[topicId];
  if (!topic) {
    return {};
  } else {
    return mapById(topic.problems);
  }
};

export const selectSolutionsForTopic = ({topics}, topicId) => {
  const topic = topics[topicId];
  if (!topic) {
    return {};
  } else {
    return mapById(topic.solutions);
  }
};

const mapById = data => {
  return data.reduce((acc, cur) => {
    return {...acc, [cur.id] : cur }
  }, {})
}