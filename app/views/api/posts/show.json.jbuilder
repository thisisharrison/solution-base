json.post do 
  json.partial! 'post', post: @post
  # json.commentIds @post.comments.pluck(:id)
end

# we'll load all comments to front end
@post.comments.includes(:author).each do |comment|
  json.all_comments do 
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
    end
  end
end

# if post_type is problem, show solutions
# add whole object to state's posts, as it's in id: post structure

if @post.is_problem?
  @post.solutions.includes(:author).each do |solution|
    json.solutions do 
      json.set! solution.id do 
        json.partial! 'post', post: solution
      end
    end
  end
end

# if post_type is solution in response to a problem post, show problem 
# extract id and add to state posts

if @post.is_solution? && !@post.problem_id.nil?
  json.problem do
    json.set! @post.problem_id do
      json.partial! 'post', post: @post.problem
    end
  end
end