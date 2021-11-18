const { Router } = require('express');
const { usersController } = require('../controllers/users.controller');
const { body } = require('express-validator');
const validateToken = require('../middlewares/auth.middleware');

const router = Router();

router.post(
  '/auth/register',
  body('name', 'Имя пользователя не может быть пустым.').notEmpty(),
  body('email', 'Неправильный email.').isEmail(),
  body(
    'password',
    'Пароль должен быть больше 4 и меньше 10 символов.'
  ).isLength({ min: 4, max: 10 }),
  usersController.register
);
router.post('/auth/login', usersController.login);
router.get('/auth/me', validateToken, usersController.me);

module.exports = router;
