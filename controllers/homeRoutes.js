const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('homepage');
})

router.get('/login', async (req, res) => {
    res.render('login');
})

router.get('/resources', async (req, res) => {
    res.render('resources');
})

module.exports = router;