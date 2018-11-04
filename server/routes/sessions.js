const app = require('express').Router();
const { User } = require('../db').models;
const jwt = require('jwt-simple');

app.post('/', async (req, res, next) => {
  const { email, password } = req.body;
  User.authenticate(email, password)



  
})

module.exports = app;