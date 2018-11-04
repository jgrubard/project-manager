const app = require('express').Router();

app.use('/users', require('./users'));
app.use('/sessions', require('./sessions'));

module.exports = app;