const router = require('express').Router();
const { Resource, User } = require('../models');

router.get('/', async (req, res) => {
    res.render('homepage');
})

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

    res.render('test', {
        projects
    });
})

module.exports = router;