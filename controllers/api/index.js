const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogPostRoutes = require('./blogPostRoutes');
const homeRoutes = require('../homeRoutes');
router.use('/users', userRoutes);
router.use('/project', blogPostRoutes);
router.use('/blogPostRoutes', blogPostRoutes);

module.exports = router;
