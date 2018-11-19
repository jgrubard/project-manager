const app = require('express').Router();
const { Project } = require('../db').models;
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

app.put('/:userId/:projectId', async (req, res, next) => {
  const { userId, projectId } = req.params;
  const { proj, usersToAdd, usersToRemove } = req.body;

  console.log('update route', usersToAdd, usersToRemove);

  try {
    const project = await Project.findById(projectId);
    const final = await Object.assign(project, proj);
    await final.save();
    final.removeUsers(usersToRemove);
    final.addUsers(usersToAdd);
    res.send(final);
  } catch(err) {
    next(err);
  }
});

app.delete('/:userId/:projectId', async (req, res, next) => {
  const { userId, projectId } = req.params;
  try {
    await Project.deleteAndDisassociate(userId, projectId);
    res.sendStatus(204);
  } catch(err) {
    next(err);
  }
});