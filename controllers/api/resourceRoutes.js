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

router.get('/:location', async (req, res) => {
    try {
        const resourceData = await Resource.findAll({ where: {location: req.params.location} });
        const projects = resourceData.map((project) => 
            project.get({ plain:true })
        );
        res.render('locationresources', {
            projects
        });
    } catch (err) {
        res.status(404).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const resourceData = await Resource.create(req.body);
        res.status(200).json(resourceData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;