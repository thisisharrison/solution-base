# == Schema Information
#
# Table name: votes
#
#  id            :bigint           not null, primary key
#  user_id       :integer
#  voteable_type :string
#  voteable_id   :bigint
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Vote < ApplicationRecord
  validates :user_id, uniqueness: { scope: [:voteable_id, :voteable_type], message: 'can only vote once' } 
  validates :voteable_type, inclusion: { in: ['Post', 'Comment'] }

  belongs_to :voteable, :polymorphic => true
  belongs_to :user, inverse_of: :votes
end
