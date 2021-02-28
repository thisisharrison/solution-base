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
class Bookmark < ApplicationRecord
  validates :user_id, uniqueness: { scope: [:bookmarkable_id, :bookmarkable_type], message: 'can only bookmark once' } 
  validates :bookmarkable_type, inclusion: { in: ['Post', 'Topic'] }
  
  belongs_to :bookmarkable, :polymorphic => true
  belongs_to :user, inverse_of: :bookmarks
end
