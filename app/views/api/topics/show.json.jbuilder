json.topic do 
  json.partial! 'topic', topic: @topic
end

json.posts do 
  json.array! @topic.posts, partial: 'api/posts/post', as: :post
end