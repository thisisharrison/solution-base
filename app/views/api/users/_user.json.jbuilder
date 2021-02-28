json.extract! user, :id, :username
json.bookmarks do
  json.topicIds user.topic_bookmarks.pluck(:id)
  json.postIds user.post_bookmarks.pluck(:id)
end