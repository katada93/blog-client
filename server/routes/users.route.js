const { Router } = require('express');
const { usersController } = require('../controllers/users.controller');

const router = Router();

router.post('/', usersController.createUser);

module.exports = router;
