const app = require('express').Router();

app.use('/user', require('./users'));

module.exports = app;