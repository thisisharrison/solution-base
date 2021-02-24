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
require 'test_helper'

class PostTopicTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
