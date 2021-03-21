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
  validates :post_topics, presence: true

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
  
  def self.sort_filter(sort)
    case sort[:sort]
    when 'most recent'
      self.most_recent(sort[:topic_id], sort[:post_type])
    when 'most comments'
      self.most_commented(sort[:topic_id], sort[:post_type])
    when 'most votes'
      self.most_votes(sort[:topic_id], sort[:post_type])
    end
  end

  # def self.most_recent
  #   self.order(created_at: :desc)
  # end

  def self.most_recent(topic_id = nil, post_type = nil)
    if topic_id.nil? 
      result = self.order(created_at: :desc)
    else
      result = self
        .joins(:topics)
        .where("topics.id = ?", topic_id)
        .order(created_at: :desc)
    end
    if !post_type.nil?
      result.where("post_type = ?", post_type)
    else
      result
    end
  end

  # def self.most_commented(dir = "desc", topic_id)
  #   self.select("posts.*, count(comments.id) as comment_count")
  #     .joins("LEFT OUTER JOIN comments ON comments.post_id = posts.id")
  #     .group("posts.id")
  #     .order("count(comments.id) #{dir}")
  # end
    # where("topics.id = ?", topic_id)

  def self.most_commented(topic_id = nil, post_type = nil)
    if topic_id.nil?
      result = self.select("posts.*, count(comments.id) as comment_count")
        .joins("LEFT OUTER JOIN comments ON comments.post_id = posts.id")
        .group("posts.id")
        .order("count(comments.id) desc")
    else
      result = self.select("posts.*, count(comments.id) as comment_count")
        .joins("LEFT OUTER JOIN comments ON comments.post_id = posts.id")
        .joins(:topics)
        .where("topics.id = ?", topic_id)
        .group("posts.id, topics.id, users.id")
        .order("count(comments.id) desc")
    end
    if !post_type.nil?
      result.where("post_type = ?", post_type)
    else
      result
    end
  end

  # def self.most_votes(dir = "desc", topic_id)
  #   self.select("posts.*, count(votes.id) as vote_count")
  #     .joins("LEFT OUTER JOIN votes ON voteable_type = 'Post' AND voteable_id = posts.id")
  #     .group("posts.id")
  #     .order("count(votes.id) #{dir}")
  # end
    # where("topics.id = ?", topic_id)
  def self.most_votes(topic_id = nil, post_type = nil)
    if topic_id.nil?
      result = self.select("posts.*, count(votes.id) as vote_count")
        .joins("LEFT OUTER JOIN votes ON voteable_type = 'Post' AND voteable_id = posts.id")
        .group("posts.id")
        .order("count(votes.id) desc")
    else
      result = self.select("posts.*, count(votes.id) as vote_count")
        .joins("LEFT OUTER JOIN votes ON voteable_type = 'Post' AND voteable_id = posts.id")
        .joins(:topics)
        .where("topics.id = ?", topic_id)
        .group("posts.id, topics.id, users.id")
        .order("count(votes.id) desc")
    end
    if !post_type.nil?
      result.where("post_type = ?", post_type)
    else
      result
    end
  end
  
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
