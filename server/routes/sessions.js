const app = require('express').Router();
const { User } = require('../db').models;

app.post('/', async (req, res, next) => {
  const { email, password } = req.body;
  const token = await User.authenticate(email, password)
  res.send(token);
});

app.get('/:token', async (req, res, next) => {
  const { token } = req.params;
  const user = await User.exchangeTokenForUser(token);
  res.send(user);
});

module.exports = app;