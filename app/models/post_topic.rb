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
end
