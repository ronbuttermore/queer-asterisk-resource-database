const router = require('express').Router();

const resourceRoutes = require('./resourceRoutes');

router.use('/resource', resourceRoutes);

module.exports = router;
