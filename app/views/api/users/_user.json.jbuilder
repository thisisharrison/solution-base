json.extract! user, :id, :username
json.bookmarks do
  json.topicIds user.topic_bookmarks.pluck(:id)
  json.postIds user.post_bookmarks.pluck(:id)
end
json.votes do
  json.postIds user.voted_posts.pluck(:id)
  json.commentIds user.voted_comments.pluck(:id)
end