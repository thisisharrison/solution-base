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

  # we can create post_topics via Post#create
  has_many :post_topics,
    dependent: :destroy,
    inverse_of: :topic
  
  has_many :posts,
    through: :post_topics,
    source: :post,
    dependent: :destroy
  
  def recent_posts
    self.posts.order(created_at: :desc).limit(5)
  end
end
