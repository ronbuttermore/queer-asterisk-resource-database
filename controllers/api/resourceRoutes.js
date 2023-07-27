const router = require('express').Router();
const Resource = require('../../models/resource');

router.get('/', async (req, res) => {
    try {
        const resourceData = await Resource.findAll();
        res.status(200).json(resourceData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;