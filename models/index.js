// import models
const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// Sets up all the Sequelize database models
// Each User has many Posts
User.hasMany(Post, {
    foreignKey: 'author_id'
});

// Each Post belongs to one User
Post.belongsTo(User, {
    foreignKey: 'author_id',
    onDelete: "CASCADE"
});

// Each Comment belongs to one User
Comment.belongsTo(User, {
    foreignKey: 'author_id',
    onDelete: "CASCADE"
});

// Each Comment belongs to a Post
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: "CASCADE"
});

// Each User has many Comments
User.hasMany(Comment, {
    foreignKey: 'author_id',
    onDelete: "CASCADE"
});

// Each Post can have many Comments
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: "CASCADE"
});

module.exports = {
    User,
    Post,
    Comment,
};
