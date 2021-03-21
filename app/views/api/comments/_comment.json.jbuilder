json.extract! comment, :id, :body, :parent_comment_id, :created_at

json.childrenComments comment.child_comments.pluck(:id)

json.postId comment.post_id

json.author do 
  json.id comment.author.id
  json.username comment.author.username
end

json.votes comment.total_votes

# see if current_user voted
json.hasVoted logged_in? ? current_user.has_voted?('Comment', comment.id) : false