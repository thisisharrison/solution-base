json.extract! post, :id, :title, :body, :post_type, :problem_id

json.author do 
  json.id post.author.id
  json.username post.author.username
end

json.topics do 
  json.array! post.topics.each do |topic|
    json.id topic.id
    json.name topic.name
  end
end

if post.is_problem?
  json.solutionIds post.solutions.pluck(:id)
end

json.commentIds post.comments.pluck(:id)

json.commentCount post.comments.count

json.votes post.total_votes


# see if current_user voted
json.hasVoted logged_in? ? current_user.has_voted?('Post', post.id) : false

# see if current_user bookmarked
json.hasBookmarked logged_in? ? current_user.has_bookmarked?('Post', post.id) : false
