const app = require('express').Router();

app.use('/users', require('./users'));
app.use('/sessions', require('./sessions'));
app.use('/projects', require('./projects'));
app.use('/userProjects', require('./userProjects'));
app.use('/tasks', require('./tasks'));

module.exports = app;