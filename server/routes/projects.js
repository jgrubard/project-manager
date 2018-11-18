const app = require('express').Router();
const { Project, User, UserProject } = require('../db').models;
module.exports = app;

app.get('/:userId', async (req, res, next) => {
  const { userId } = req.params;
  try {
    const projects = await Project.findAllForUser(userId);
    res.send(projects);
  } catch(err) {
    next(err);
  }
});

app.post('/:userId', async (req, res, next) => {
  const { userId } = req.params;
  try {
    const project = await Project.createAndAssociate(userId, req.body);
    res.send(project);
  } catch(err) {
    next(err);
  }
});