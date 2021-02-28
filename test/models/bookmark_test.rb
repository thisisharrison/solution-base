# == Schema Information
#
# Table name: bookmarks
#
#  id                :bigint           not null, primary key
#  user_id           :integer
#  bookmarkable_type :string
#  bookmarkable_id   :bigint
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
require 'test_helper'

class BookmarkTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
