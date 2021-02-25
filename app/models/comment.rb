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
  
  validates :body, presence: true

  belongs_to :author,
    class_name: :User
  
  belongs_to :post

  # for nested comment, optional
  belongs_to :comment,
    class_name: :Comment,
    primary_id: :id,
    foreign_key: :parent_comment_id,
    optional: true
  
end
