# == Schema Information
#
# Table name: comments
#
#  id                :bigint           not null, primary key
#  author_id         :integer          not null
#  post_id           :integer          not null
#  parent_comment_id :integer
#  body              :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Comment < ApplicationRecord
  include Voteable

  validates :body, presence: true

  belongs_to :author,
    class_name: :User
  
  belongs_to :post

  # optional: not every comment has nested comments
  belongs_to :parent_comment,
    class_name: :Comment,
    primary_key: :id,
    foreign_key: :parent_comment_id,
    optional: true
  
  has_many :child_comments,
    class_name: :Comment,
    primary_key: :id,
    foreign_key: :parent_comment_id

  # hash will include nil parent_comment_ids and real parents
  # array will hold the comments under such parent
  def comments_in_hash
    all_comments = Hash.new { |h, k| h[k] = [] }
    self.comments.includes(:author).each do |comment|
      all_comments[comments.parent_comment_id] << comment
    end
    all_comments
  end
end
