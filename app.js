const express = require('express');
const app = express();
const sequelize = require('./config/connection');
const User = require('./models/user');
const axios = require('axios');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isPasswordValid = await user.validatePassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'An unexpected error occurred', errorMessage: error.message });
  }
});

const port = 3006;
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const data = {
  username: 'testuser',
  password: 'testpassword',
};

axios.post('http://localhost:3006/login', data)
  .then((response) => {
  
    console.log(response.data); 
  })
  .catch((error) => {
    
    console.error('Error:', error.message);
  });
