json.extract! post, :id, :title, :body, :post_type
json.author do 
  json.id post.author.id
  json.username post.author.username
end
json.topic do 
  json.array! post.topics.each do |topic|
    json.id topic.id
    json.name topic.name
  end
end