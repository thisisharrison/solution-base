export const selectPost = ({posts}, postId) => {
  return posts[postId] || { commentIds: [] }
};

export const selectProblemForPost = ({posts}, post) => {
  const problemId = post.problem_id || null
  if (!problemId) {
    return {}
  } else {
    return posts[problemId]
  }
  // old method:
  // return post.problem || {}
};

export const selectSolutionsForPost = ({posts}, post) => {
  const solutionIds = post.solutionIds || []
  if (!solutionIds.length) {
    return []
  } else {
    return solutionIds.map(id => posts[id])
  }
  // old method:
  // return post.solutions || {}
}

export const selectCommentsForPost = ({posts, comments}, post) => {
  if (!Object.keys(comments).length) return {};
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
    return topic.problems;
  }
};

export const selectSolutionsForTopic = ({topics}, topicId) => {
  const topic = topics[topicId];
  if (!topic) {
    return {};
  } else {
    return topic.solutions;
  }
};

const mapById = data => {
  return data.reduce((acc, cur) => {
    return {...acc, [cur.id] : cur }
  }, {})
}

export const selectBookmarkIds = ({entities, session}, type) => {
  const userId = session.id;
  const bookmarks = entities.users[userId].bookmarks;
  return bookmarks[type] || []
}