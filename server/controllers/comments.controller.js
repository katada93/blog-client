const CommentModel = require('../models/Comment.model');
const { validationResult } = require('express-validator');

module.exports.commentsController = {
  create: async (req, res) => {
    const body = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: 'Ошибка при созаднии комментария',
        errors: errors.array(),
      });
    }

    try {
      const comment = await CommentModel.create(body);

      return res.status(201).json(comment);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  getAllByPost: async (req, res) => {
    const { id } = req.params;

    try {
      const comments = await CommentModel.find({ post: id }).populate(
        'user',
        'name email img'
      );

      return res.status(200).json(comments);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  remove: async (req, res) => {
    const { id } = req.params;

    try {
      const deleted = await CommentModel.findByIdAndRemove(id);

      if (!deleted) {
        return res.status(400).json({
          error: 'Не удалось удалить комментарий. Укажите верный ID.',
        });
      }

      return res.json({
        message: 'Комментарий успешно удален.',
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  edit: async (req, res) => {
    const { id } = req.params;
    const { text } = req.body;

    try {
      const edited = await CommentModel.findByIdAndUpdate(
        id,
        { text },
        {
          new: true,
        }
      );

      if (!edited) {
        return res.status(400).json({
          error: 'Не удалось изменить комментарий. Проверь правильность ID',
        });
      }

      return res.json(edited);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
