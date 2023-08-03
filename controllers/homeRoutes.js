const router = require('express').Router();
const { Resource, User } = require('../models');

router.get('/', async (req, res) => {
    res.render('homepage');
})

router.get('/resources/:location', async (req, res) => {
  try {
      const resourceData = await Resource.findAll({ where: {location: req.params.location} });
      const projects = resourceData.map((project) => 
          project.get({ plain:true })
      );
      res.render('resources', {
          projects
      });
  } catch (err) {
      res.status(404).json(err);
  }
});

router.get('/resources', async (req, res) => {
    const resourceData = await Resource.findAll(
        // {
        // include: [
        //   {
        //     model: User,
        //     attributes: ['name'],
        //   },
        // ],
    //   }
      );
        

      const projects = resourceData.map((project) => 
        project.get({ plain: true })
      );

      console.log("IS IT WORKING?", {projects})

    res.render('resources', {
        projects
    });
})

router.get('/login', async (req, res) => {
  res.render('login');
});

module.exports = router;