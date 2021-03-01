# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  validates :username, :email, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  
  # for validation
  attr_reader :password

  after_initialize :ensure_session_token

  has_many :posts,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Post,
    dependent: :destroy
  
  has_many :comments,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Comment,
    dependent: :destroy
  
  has_many :bookmarks, 
    inverse_of: :user,
    dependent: :destroy
  
  has_many :votes,
    inverse_of: :user,
    dependent: :destroy
    
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def password=(password)
    # Validates length with attr reader
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end

  def topic_bookmarks
    self.bookmarks.where({ :bookmarkable_type => 'Topic' })
  end

  def post_bookmarks
    self.bookmarks.where({ :bookmarkable_type => 'Post' })
  end

  def voted_posts
    self.votes.where({ :voteable_type => 'Post' })
  end

  def voted_comments
    self.votes.where({ :voteable_type => 'Comment' })
  end
end
