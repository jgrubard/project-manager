const conn = require('../conn');
const { Sequelize } = conn;

const Project = conn.define('project', {
  name: {
    type: Sequelize.STRING
  }
});

Project.findAllForUser = async function(userId) {
  const userProjects = await conn.models.user_project.findAll({ where: { userId }});
  const projectIds = userProjects.map(up => up.projectId);
  let projects = projectIds.map(async id => await this.findById(id));
  return Promise.all(projects);
}

Project.createAndAssociate = async function(userId, reqBody) {
  const project = await Project.create(reqBody);
  const user = await conn.models.user.findById(userId);
  project.addUser(user, { through: { role: 'creator' }});
  return project;
}

Project.deleteAndDisassociate = async function(userId, projectId) {
  const userProjects = await conn.models.user_project.findAll({ where: { projectId }});
  const projectIds = userProjects.map(up => up.projectId);
  const user = await conn.models.user.findById(userId);
  user.removeProjects(projectIds);
  const project = await this.findById(projectId);
  return project.destroy();
}

module.exports = Project;