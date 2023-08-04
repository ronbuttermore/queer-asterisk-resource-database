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
        const resourceData = await Resource.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            location: req.body.location,
            credential: req.body.credential,
            pronouns: req.body.pronouns,
            organization: req.body.organization,
            description: req.body.description,
            insurance: req.body.insurance,
            address: req.body.address,
            phone_number: req.body.phone_number,
            email: req.body.email,
            social: req.body.social
        });
        res.status(200).json(resourceData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;