const { Router } = require('express');
const { commentsController } = require('../controllers/comments.controller');
const { body } = require('express-validator');

const router = Router();

router.get('/:id', commentsController.getAllByPost);
router.post(
  '/',
  body('text', 'Комментарий не может быть пустым.').notEmpty(),
  commentsController.create
);
router.delete('/:id', commentsController.remove);
router.patch('/:id', commentsController.edit);

module.exports = router;
