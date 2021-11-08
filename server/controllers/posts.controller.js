const { validationResult } = require('express-validator');
const PostModel = require('../models/Post.model');

module.exports.postsController = {
  create: async (req, res) => {
    const body = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: 'Ошибка при созаднии поста',
        errors: errors.array(),
      });
    }

    try {
      const post = await PostModel.create(body);

      return res.status(201).json(post);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  getById: async (req, res) => {
    const { id } = req.params;

    try {
      const post = await PostModel.findById(id)
        .populate('user', 'name email img')
        .populate('category', 'name');

      return res.status(200).json(post);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  getAll: async (_, res) => {
    try {
      const posts = await PostModel.find()
        .populate('user', 'name email img')
        .populate('category', 'name');

      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  remove: async (req, res) => {
    const { id } = req.params;

    try {
      const deleted = await PostModel.findByIdAndRemove(id);

      if (!deleted) {
        return res.status(400).json({
          error: 'Не удалось удалить пост. Укажите верный ID.',
        });
      }

      return res.json({
        message: 'Пост успешно удален.',
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  edit: async (req, res) => {
    const { id } = req.params;
    const body = req.body;

    try {
      const edited = await PostModel.findByIdAndUpdate(id, body, { new: true });

      if (!edited) {
        return res.status(400).json({
          error: 'Не удалось изменить пост. Проверь правильность ID',
        });
      }

      return res.json(edited);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
