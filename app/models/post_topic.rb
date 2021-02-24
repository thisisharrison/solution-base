# == Schema Information
#
# Table name: post_topics
#
#  id         :bigint           not null, primary key
#  post_id    :integer          not null
#  topic_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class PostTopic < ApplicationRecord

  validates :post_id, uniqueness: { scope: :topic_id }
  
  belongs_to :post
  belongs_to :topic
end
