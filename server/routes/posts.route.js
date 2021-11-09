const { Router } = require('express');
const { postsController } = require('../controllers/posts.controller');
const { body } = require('express-validator');

const router = Router();

router.get('/:id', postsController.getById);
router.get('/', postsController.getAll);
router.post(
  '/',
  body('title', 'Заголовок поста не может быть пустым.').notEmpty(),
  body('description', 'Текст поста не может быть пустым.').notEmpty(),
  body('user', 'Не указан ID юзера.').notEmpty(),
  body('category', 'Не указан ID категории.').notEmpty(),
  postsController.create
);
router.delete('/:id', postsController.remove);
router.patch('/:id', postsController.edit);

module.exports = router;
