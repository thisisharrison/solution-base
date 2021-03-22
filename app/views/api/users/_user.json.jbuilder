json.extract! user, :id, :username
json.bookmarks do
  json.topicIds user.topic_bookmarks.pluck(:bookmarkable_id)
  json.postIds user.post_bookmarks.pluck(:bookmarkable_id)
end
json.votes do
  json.postIds user.voted_posts.pluck(:voteable_id)
  json.commentIds user.voted_comments.pluck(:voteable_id)
end