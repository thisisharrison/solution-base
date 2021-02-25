json.post do 
  json.partial! 'post', post: @post
  json.commentIds @post.comments.pluck(:id)
end

@post.solutions.includes(:author).each do |solution|
  json.solutions do 
    json.set! solution.id do 
      json.partial! 'post', post: solution
    end
  end
end

# we'll load all comments to front end
@post.comments.includes(:author).each do |comment|
  json.all_comments do 
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
    end
  end
end