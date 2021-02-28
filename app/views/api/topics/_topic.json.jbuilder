json.extract! topic, :id, :name, :description
json.postIds topic.posts.pluck(:id)