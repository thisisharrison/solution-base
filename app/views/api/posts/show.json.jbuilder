json.post do 
  json.partial! 'post', post: @post
end

json.solutions do 
  json.array! @post.solutions, partial: 'post', as: :post
end

json.comments do
end