const CategoryModel = require('../models/Category.model');

module.exports.categoriesController = {
  create: async (req, res) => {
    const { name } = req.body;

    try {
      const newCategory = await CategoryModel.create({ name });

      return res.status(201).json(newCategory);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  getAll: async (_, res) => {
    try {
      const categories = await CategoryModel.find();

      return res.status(200).json(categories);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  remove: async (req, res) => {
    const { id } = req.params;

    try {
      const deleted = await CategoryModel.findByIdAndRemove(id);

      if (!deleted) {
        return res.status(400).json({
          error: 'Не удалось удалить категорию. Укажите верный ID',
        });
      }

      return res.json({
        message: 'Категория успешно удалена',
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  edit: async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
      const edited = await CategoryModel.findByIdAndUpdate(
        id,
        { name },
        { new: true }
      );

      if (!edited) {
        return res.status(400).json({
          error: 'Не удалось изменить название. Проверь правильность ID',
        });
      }

      return res.json(edited);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
