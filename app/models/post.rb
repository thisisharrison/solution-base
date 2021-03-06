# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  problem_id :integer
#  title      :string           not null
#  body       :string           not null
#  post_type  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Post < ApplicationRecord
  include Bookmarkable
  include Voteable

  validates :title, :body, presence: true
  validates :post_type, inclusion: { in: ['solution', 'problem'] }

  belongs_to :author,
    class_name: :User
  
  # only a solution post to a problem post has problem_id 
  belongs_to :problem,
    class_name: :Post,
    primary_key: :id,
    foreign_key: :problem_id,
    optional: true
    
  # before implementing soft delete, destroy solution posts if problem is destroyed
  has_many :solutions,
      class_name: :Post,
      primary_key: :id,
      foreign_key: :problem_id,
      dependent: :destroy

  # we can create post_topics via Post#create
  has_many :post_topics,
    dependent: :destroy,
    inverse_of: :post
  
  has_many :topics,
    through: :post_topics,
    source: :topic
  
  has_many :comments,
    dependent: :destroy
  
  def self.most_commented(dir = "desc")
    self.select("posts.*, count(comments.id) as comment_count")
      .joins("INNER JOIN comments ON comments.post_id = posts.id")
      .group("posts.id")
      .order("comment_count #{dir}")
    end
    # where("topics.id = ?", topic_id)

  def self.most_votes(dir = "desc")
    self.select("posts.*, count(votes.id) as votes_count")
      .joins("INNER JOIN votes ON voteable_type = 'Post' AND voteable_id = posts.id")
      .group("posts.id")
      .order("votes_count #{dir}")
    end
    # where("topics.id = ?", topic_id)
  
  def is_problem?
    self.post_type == 'problem'
  end

  # def problem_id
  #   if is_solution?
  #     self.problem.id  
  #   end 
  # end

  def is_solution?
    self.post_type == 'solution'
  end
end
