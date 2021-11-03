const { Router } = require('express');

const router = Router();

router.use('/api', require('./users.route'));
router.use('/api/categories', require('./categories.route'));

module.exports = router;
