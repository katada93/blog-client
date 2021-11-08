const { Router } = require('express');

const router = Router();

router.use('/api', require('./users.route'));
router.use('/api/categories', require('./categories.route'));
router.use('/api/posts', require('./posts.route'));
router.use('/api/comments', require('./comments.route'));

module.exports = router;
