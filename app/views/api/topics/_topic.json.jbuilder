json.extract! topic, :id, :name, :description
json.postIds topic.posts.pluck(:id)
# see if current_user bookmarked
json.hasBookmarked current_user.has_bookmarked?('Topic', topic.id)