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
  
  # we can create post_topics via Post#create
  has_many :post_topics,
    dependent: :destroy,
    inverse_of: :post
  
  has_many :topics,
    through: :post_topics,
    source: :topic
  
  has_many :comments,
    dependent: :destroy
  
  def solutions
    Post.where({problem_id: self.id, post_type: 'solution'})
  end
end
