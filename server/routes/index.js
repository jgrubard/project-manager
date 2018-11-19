const app = require('express').Router();

app.use('/users', require('./users'));
app.use('/sessions', require('./sessions'));
app.use('/projects', require('./projects'));
app.use('/userProjects', require('./userProjects'));

module.exports = app;