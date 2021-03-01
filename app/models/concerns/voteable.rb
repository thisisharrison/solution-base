module Voteable
  extend ActiveSupport::Concern

  included do
    has_many :votes, 
        as: :voteable, 
        dependent: :destroy
  end

  def total_votes
    self.votes.count
  end

end
