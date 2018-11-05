const app = require('express').Router();
const { User } = require('../db').models;

const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

app.post('/', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const hash = await User.findPassword(email);
    const authorized = await bcrypt.compare(password, hash);
    if(authorized) {
      const token = await User.authenticate(email, hash)
      return res.send(token);
    }
    res.sendStatus(401);
  } catch(err) {
    console.log('ERROR AUTHENTICATING:', err);
  }
});

app.get('/:token', async (req, res, next) => {
  const { token } = req.params;
  const user = await User.exchangeTokenForUser(token);
  res.send(user);
});

app.post('/signup', async (req, res, next) => {
  const user = await User.create(req.body);
  const { email, password } = user;
  const token = await User.authenticate(email, password);
  res.send(token);
});

module.exports = app;