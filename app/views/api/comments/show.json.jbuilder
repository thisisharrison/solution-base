json.comment do 
  json.partial! 'comment', comment: @comment
end

json.child_comments do 
  json.array! @comment.child_comments
end