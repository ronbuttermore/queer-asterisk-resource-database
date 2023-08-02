const router = require('express').Router();

const resourceRoutes = require('./resourceRoutes');
const userRoutes = require('./userRoutes');

router.use('/resource', resourceRoutes);
router.use('/user', userRoutes);

module.exports = router;
