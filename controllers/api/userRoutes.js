const express = require('express');
const router = express.Router();
const User = require('../../models/User');

router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll();
    res.status(200).json(userData);
  } catch (err) {
      res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isPasswordValid = await user.validatePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    req.session.user = user;

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
  
    console.error('Login error:', error);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
});



module.exports = router;
