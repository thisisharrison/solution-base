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

# Seed topics
seed_topics = []

TOPICS.each { |name, description|
  topic = Topic.create!(
    name: name,
    description: description
  )
  seed_topics << topic
}

# Seed Users
seed_users = []

10.times do 
  user = User.create!({
    username: Faker::Name.unique.first_name,
    email: Faker::Internet.unique.email,
    password: '123123'
  })
  seed_users << user
end

demo = User.create!({
  username: 'demo',
  email: 'demo@email.com',
  password: '123123'
})
seed_users << demo

# Seed Posts and PostTopics
post_type = ['solution', 'problem']

seed_posts = []

20.times do 
  user_idx = rand(10)
  topic_idx = rand(17)
  type_idx = rand(2)
  post = Post.create!({
    author_id: seed_users[user_idx].id,
    title: Faker::Lorem.sentence,
    body: Faker::Lorem.paragraphs[0],
    post_type: post_type[type_idx]
  })
  PostTopic.create!({
    post_id: post.id,
    topic_id: seed_topics[topic_idx].id
  })
  seed_posts << post
end

# Add some solution to problem post
seed_problems = Post.where(post_type: 'problem').limit(5)

new_posts = []

seed_problems.each do |e, i|
  topic_idx = rand(17)
  post = Post.create!({
    author_id: e.author_id + 1,
    problem_id: e.id,
    title: Faker::Lorem.sentence,
    body: Faker::Lorem.paragraphs[0],
    post_type: 'solution'
  })
  PostTopic.create!({
    post_id: post.id,
    topic_id: seed_topics[topic_idx].id
  })
end