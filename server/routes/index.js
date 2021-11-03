const { Router } = require('express');

const router = Router();

router.use('/api', require('./users.route'));
router.use('/api/categories', require('./categories.route'));
router.use('/api/posts', require('./posts.route'));

module.exports = router;
