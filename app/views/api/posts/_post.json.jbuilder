json.extract! post, :id, :title, :body, :post_type, :problem_id

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

if post.is_problem?
  json.solutionIds post.solutions.pluck(:id)
end

json.commentIds post.comments.pluck(:id)

json.votes post.total_votes

if logged_in?
  # see if current_user voted
  json.hasVoted current_user.has_voted?('Post', post.id)

  # see if current_user bookmarked
  json.hasBookmarked current_user.has_bookmarked?('Post', post.id)
end