json.topic do 
  json.partial! 'topic', topic: @topic
end


if @posts
  json.postOrder @posts.pluck(:id)
  json.problemIds @topic.problems.pluck(:id)
  json.solutionIds @topic.solutions.pluck(:id)
  json.posts do 
    @posts.each do |post|
      json.set! post.id do 
        json.partial! post, partial: 'api/posts/post', as: :post
      end
    end
  end
else 
  json.postOrder @topic.posts.pluck(:id)
  json.problemIds @topic.problems.pluck(:id)
  json.solutionIds @topic.solutions.pluck(:id)
  json.posts do 
    @topic.posts.each do |post|
      json.set! post.id do 
        json.partial! post, partial: 'api/posts/post', as: :post
      end
    end
  end
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

# else
# # user is filtering, return posts in order
#   json.posts do 
#     json.array! @posts, partial: 'api/posts/post', as: :post
#   end
# end
