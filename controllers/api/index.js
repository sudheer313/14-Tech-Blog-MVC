const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogPostRoutes = require('./blogPostRoutes');

router.use('/users', userRoutes);
router.use('/projects', blogPostRoutes);
router.use('/blogPostRoutes', blogPostRoutes);

module.exports = router;
