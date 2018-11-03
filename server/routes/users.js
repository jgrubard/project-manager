const app = require('express').Router();
const User = require('../db');

app.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch(err) {
    console.error(err);
    next(err);
  }
});

module.exports = app;