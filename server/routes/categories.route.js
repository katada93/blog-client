const { Router } = require('express');
const {
  categoriesController,
} = require('../controllers/categories.controller');

const router = Router();

router.get('/', categoriesController.getAll);
router.post('/', categoriesController.create);
router.delete('/:id', categoriesController.remove);
router.patch('/:id', categoriesController.edit);

module.exports = router;
