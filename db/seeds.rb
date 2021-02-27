# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Topic.destroy_all
Post.destroy_all
PostTopic.destroy_all
Comment.destroy_all

TOPICS = {
  'No Poverty': 'End poverty in all its forms everywhere.',
  'Zero Hunger': 'End hunger, achieve food security and improved nutrition and promote sustainable agriculture.',
  'Good Health and Well-Being': 'Ensure healthy lives and promote well-being for all at all ages.',
  'Quality Education': 'Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.',
  'Gender Equality': 'Achieve gender equality and empower all women and girls.',
  'Clean Water and Sanitation': 'Ensure availability and sustainable management of water and sanitation for all.',
  'Afforable and Clean Energy': 'Ensure access to affordable, reliable, sustainable and modern energy for all.',
  'Decent Work and Economic Growth': 'Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all.',
  'Industry, Innovation and Infrastructure': 'Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation.',
  'Reduced Inequalities': 'Reduce inequality within and among countries.',
  'Sustainable Cities and Communities': 'Make cities and human settlements inclusive, safe, resilient and sustainable.',
  'Responsible Consumption and Production': 'Ensure sustainable consumption and production patterns.',
  'Climate Action': 'Take urgent action to combat climate change and its impacts*.',
  'Life Below Water': 'Conserve and sustainably use the oceans, seas and marine resources for sustainable development.',
  'Life On Land': 'Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss.',
  'Peace, Justice and Strong Institutions': 'Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels.',
  'Partnerships for the Goals': 'Strengthen the means of implementation and revitalize the global partnership for sustainable development.'
}

# seed variables
TOPICS_COUNT = 17
USERS_COUNT = 20
POSTS_COUNT = 30
COMMENTS_COUNT = 20
NEST_COMMENTS_COUNT = 40

class Helper
  attr_accessor :seed_topics, :seed_comments, :seed_users, :seed_posts, :seed_comments
  def initialize
    @seed_topics = []
    @seed_users = []
    @seed_posts = []
    @seed_comments = []
  end

  def randTopic
    seed_topics.shuffle.first
  end

  def randUser 
    seed_users.shuffle.first
  end

  def randPost
    seed_posts.shuffle.first
  end

  def randPostType
    ['solution', 'problem'].shuffle.first
  end

  def randPostTopics
    post_topics = []
    rand(1..3).times do
      topic = randTopic
      while post_topics.include?(topic)
        topic = randTopic
      end
      post_topics << topic
    end
    post_topics
  end

  def randComment
    seed_comments.shuffle.first
  end
end

helper = Helper.new()

# Seed topics
TOPICS.each { |name, description|
  topic = Topic.create!(
    name: name,
    description: description
  )
  helper.seed_topics << topic
}

# Seed Users
USERS_COUNT.times do 
  user = User.create!({
    username: Faker::Name.unique.first_name,
    email: Faker::Internet.unique.email,
    password: '123123'
  })
  helper.seed_users << user
end

demo = User.create!({
  username: 'demo',
  email: 'demo@email.com',
  password: '123123'
})
helper.seed_users << demo

# Seed Posts and PostTopics
POSTS_COUNT.times do 
  post = Post.create!({
    author_id: helper.randUser.id,
    title: Faker::Lorem.sentence,
    body: Faker::Lorem.paragraphs[0],
    post_type: helper.randPostType,
    topics: helper.randPostTopics
  })
  helper.seed_posts << post
end

# Add some Solution to Problem post
seed_problems = Post.where(post_type: 'problem').limit(10)

seed_problems.each do |e, i|
  post = Post.create!({
    author_id: helper.randUser.id,
    problem_id: e.id,
    title: Faker::Lorem.sentence,
    body: Faker::Lorem.paragraphs[0],
    post_type: 'solution',
    topics: helper.randPostTopics
  })
  helper.seed_posts << post
end

# Seed Comments
COMMENTS_COUNT.times do 
  comment = Comment.create!({
    author_id: helper.randUser.id,
    post_id: helper.randPost.id,
    body: Faker::Lorem.paragraphs[0]
  })
  helper.seed_comments << comment
end 

# Seed Nested Comments
NEST_COMMENTS_COUNT.times do 
  comment = helper.randComment
  nest_comment = Comment.create!({
    author_id: helper.randUser.id,
    post_id: comment.post.id,
    parent_comment_id: comment.id,
    body: Faker::Lorem.paragraphs[0]
  })
  helper.seed_comments << nest_comment
end
