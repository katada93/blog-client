const { Router } = require('express');
const { postsController } = require('../controllers/posts.controller');

const router = Router();

router.get('/:id', postsController.getById);
router.get('/', postsController.getAll);
router.post('/', postsController.create);
router.delete('/:id', postsController.remove);
router.patch('/:id', postsController.edit);

module.exports = router;
