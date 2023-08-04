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
        res.status(200).json(resourceData);
    } catch (err) {
        res.status(404).json(err);
    }
})

router.post('/', async (req, res) => {
    try {
        const resourceData = await Resource.create(req.body);
        res.status(200).json(resourceData);
    } catch (err) {
        res.status(400).json(err);
    }
});



router.post('/filteredData', async (req, res) => {
    try {
      if (req.body.location) {
        const resourceData = await Resource.findAll({ where: { location: req.body.location } });
        console.log(resourceData);
      }
      if (req.body.Insurance) {
        const insuranceData = await Resource.findAll({ where: { Insurance: req.body.Insurance } });
        console.log(insuranceData);
      }
      res.status(200).end();
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

module.exports = router;