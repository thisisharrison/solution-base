json.topic do 
  json.partial! 'topic', topic: @topic
end

# Remove after QA
json.posts do 
  json.array! @topic.posts, partial: 'api/posts/post', as: :post
end

json.problems do
  json.array! @topic.problems, partial: 'api/posts/post', as: :post
end

json.solutions do
  json.array! @topic.solutions, partial: 'api/posts/post', as: :post
end