# json.array! @topics, :id, :name
json.array! @topics do |topic|
  json.id topic.id
  json.name topic.name
  json.posts topic.posts.count
end