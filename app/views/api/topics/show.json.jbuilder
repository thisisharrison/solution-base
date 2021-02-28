json.topic do 
  json.partial! 'topic', topic: @topic
end

# Remove after QA
json.posts do 
  json.array! @topic.posts, partial: 'api/posts/post', as: :post
end

json.problems do
  @topic.problems.each do |problem|
    json.set! problem.id do 
      json.partial! 'api/posts/post', post: problem
    end
  end
end

json.solutions do 
  @topic.solutions.each do |solution|
    json.set! solution.id do 
      json.partial! 'api/posts/post', post: solution
    end
  end
end