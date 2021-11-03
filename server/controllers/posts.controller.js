const PostModel = require('../models/Post.model');

module.exports.postsController = {
  createPost: async (req, res) => {
    const { title, description, user, category } = req.body;
    try {
      const post = await PostModel.create({
        title,
        description,
        user,
        category,
      });

      return res.status(201).json(post);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
