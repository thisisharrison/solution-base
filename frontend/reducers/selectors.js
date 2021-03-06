export const selectPost = ({posts}, postId) => {
  return posts[postId] || { commentIds: [], solutionIds: [], topics: [], author: {} }
};

export const selectProblemForPost = ({posts}, post) => {
  const problemId = post.problem_id || null
  if (!problemId && problemId in posts) {
    return {}
  } else {
    return posts[problemId]
  }
};

export const selectSolutionsForPost = ({posts}, post) => {
  const solutionIds = post.solutionIds;
  if (!solutionIds.length) {
    return []
  } else {
    // const solutions = [];
    // for (let i = 0; i < solutionIds; i++) {
    //   let id = solutionIds[i];
    //   if (!posts[id]) {
    //     return solutions;
    //   } else {
    //     solutions.push(posts[id])
    //   }
    // }
    // debugger
    // return solutions;
    return solutionIds.map(id => posts[id])
  }
  // old method:
  // return post.solutions || {}
}

export const selectCommentsForPost = ({posts, comments}, post) => {
  if (!Object.keys(comments).length) return {};
  if (post.commentIds.filter(commentId => !comments[commentId]).length) return {};
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

export const selectPostOrderForTopic = ({topics}, topicId) => {
  const topic = topics[topicId];
  if (!topic) {
    return [];
  } else {
    return topic.postOrder;
  }
};

export const selectProblemsForTopic = ({topics, posts}, topicId) => {
  const topic = topics[topicId];
  if (!topic) {
    return [];
  } else {
    const postOrder = topic.postOrder;
    const problems = postOrder.filter(id => topic.problemIds.includes(id)).map(id => posts[id]);
    return problems;
  }
};

export const selectSolutionsForTopic = ({topics, posts}, topicId) => {
  const topic = topics[topicId];
  if (!topic) {
    return [];
  } else {
    const postOrder = topic.postOrder;
    const solutions = postOrder.filter(id => topic.solutionIds.includes(id)).map(id => posts[id]);
    return solutions;
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
  return bookmarks[type] || [];
}

export const checkPostOwner = (session, post) => {
  if (!post.author.id) return false;
  return session.id === post.author.id;
}

export const checkCommentOwner = (session, comment) => {
  if (!comment) return false;
  return session.id === comment.author.id;
}

export const sessionUserId = (session) => {
  return session.id;
}

// future enhancement to save user's sort and filter preference 
export const selectPrevSort = ({sorting}, topicId) => {
  const sort = sorting[topicId];
  if (!topic) {
    return null;
  } else {
    return sort;
  }
}

export const selectPostForHomePage = posts => {
  const postOrder = posts.postOrder;
  return postOrder.map(id => posts[id]);
}