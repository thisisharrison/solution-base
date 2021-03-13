# == Schema Information
#
# Table name: topics
#
#  id          :bigint           not null, primary key
#  name        :string
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Topic < ApplicationRecord
  include Bookmarkable
  
  # we can create post_topics via Post#create
  has_many :post_topics,
    dependent: :destroy,
    inverse_of: :topic
  
  has_many :posts,
    through: :post_topics,
    source: :post,
    dependent: :destroy
  
  has_many :solutions,
    -> { where(post_type: 'solution')},
    through: :post_topics,
    source: :post

  has_many :problems,
    -> { where(post_type: 'problem')},
    through: :post_topics,
    source: :post

  def sort_filter(sort)
    case sort
    when 'most recent'
      self.most_recent_posts
    when 'most comments'
      self.most_commented_posts
    when 'most votes'
      self.most_voted_posts
    end
  end

  def most_recent_posts
    self.posts.order(created_at: :desc)
  end

  def most_commented_posts (dir = 'desc')
    self.posts.most_commented(dir)
  end

  def most_voted_posts (dir = 'desc')
    self.posts.most_votes(dir)
  end

end
