json.extract! comment, :id, :body

json.postId comment.post_id

json.author do 
  json.id comment.author.id
  json.username comment.author.username
end