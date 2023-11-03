const sequelize = require('../config/connection');
const User = require('../models/user');
const Expertise = require('../models/expertise');
const Post = require('../models/post');
const Comment = require('../models/comment');

const seedDatabase = async () => {
    try {
        await sequelize.sync({ force: true });

        // Expertise Seed
        const expertiseData = [
            { languages: 'HTML' },
            { languages: 'JavaScript' },
            { languages: 'CSS' },
            { languages: 'Database' },
        ];
        await Expertise.bulkCreate(expertiseData);

        // Users Seed
        const userData = [
            {
                userName: 'johnDoe',
                password: 'password123',
                email: 'john@example.com',
                administrator: false,
                expertise_id: 1,
            },
            {
                userName: 'janeDoe',
                password: 'password456',
                email: 'jane@example.com',
                administrator: true,
                expertise_id: 2,
            },
        ];
        await User.bulkCreate(userData);

        // Posts Seed
        const postData = [
            {
                title: 'HTML Basics',
                content: 'HTML stands for HyperText Markup Language.',
                userName_id: 1,
                post_date: new Date(),
            },
            {
                title: 'Understanding JavaScript',
                content: 'JavaScript is a scripting language for Web pages.',
                userName_id: 2,
                post_date: new Date(),
            },
        ];
        await Post.bulkCreate(postData);

        // Comments Seed
        const commentData = [
            {
                commentText: 'This is very informative, thanks!',
                commented_at: new Date(),
                userName_id: 2,
                post_id: 1,
            },
            {
                commentText: 'I had some doubts, but this cleared it up!',
                commented_at: new Date(),
                userName_id: 1,
                post_id: 2,
            },
        ];
        await Comment.bulkCreate(commentData);

        console.log('Database seeded successfully.');
    } catch (error) {
        console.error('Error during database seeding:', error);
    } finally {
        process.exit(0);
    }
};

seedDatabase();
