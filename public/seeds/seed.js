const sequelize = require('../../config/connection');
const User = require('../../models/user');
const Expertise = require('../../models/expertise');
const UserExpertise = require('../models/userExpertise');
const Post = require('../../models/post');
const Comment = require('../../models/comment');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Expertise Seed
  const expertises = await Expertise.bulkCreate([
    { languages: 'HTML' },
    { languages: 'JavaScript' },
    { languages: 'CSS' },
    { languages: 'Database' },
  ]);

  // Users Seed
  const users = await User.bulkCreate([
    {
      userName: 'johnDoe',
      password: 'password123',
      email: 'john@example.com',
      administrator: false,
    },
    {
      userName: 'janeDoe',
      password: 'password456',
      email: 'jane@example.com',
      administrator: true,
    },
  ]);

  // UserExpertise Seed
  await UserExpertise.bulkCreate([
    { user_id: 1, expertise_id: 1 },  // John knows HTML
    { user_id: 1, expertise_id: 2 },  // John also knows JavaScript
    { user_id: 2, expertise_id: 3 },  // Jane knows CSS
  ]);

  // Posts Seed
  const posts = await Post.bulkCreate([
    {
      title: 'HTML Basics',
      content: 'HTML stands for HyperText Markup Language.',
      username_id: 1,
      post_date: new Date(),
    },
    {
      title: 'Understanding JavaScript',
      content: 'JavaScript is a scripting language for Web pages.',
      username_id: 2,
      post_date: new Date(),
    },
  ]);

  // Comments Seed
  const comments = await Comment.bulkCreate([
    {
      commentText: 'This is very informative, thanks!',
      commented_at: new Date(),
      user_id: 2,
      post_id: 1,
    },
    {
      commentText: 'I had some doubts, but this cleared it up!',
      commented_at: new Date(),
      user_id: 1,
      post_id: 2,
    },
  ]);

  process.exit(0);
};

seedDatabase();


