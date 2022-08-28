const sequelize = require('../config/connection');
const { User, Blogpost,Comment } = require('../models');

const commentData = require('./commentData.json');
const blogPostData = require('./blogPostData.json');
const userData=require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  
  const blogPosts=[];

  for (const blogPost of blogPostData) {
    const post = await Blogpost.create({
      ...blogPost,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
    blogPosts.push(post);
  }
  //commnet
  for (const comment of commentData) {
    await Comment.create({
      ...comment,
      blogpost_id: blogPosts[Math.floor(Math.random() * blogPosts.length)].id,
      user_id:users[Math.floor(Math.random()*users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
