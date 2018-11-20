const conn = require('./conn');

const User = require('./models/User');
const Project = require('./models/Project');
const UserProject = require('./models/UserProject');
const Task = require('./models/Task');

const syncAndSeed = require('./seed');
// const seed = require('./seed');

User.belongsToMany(Project, { through: UserProject });
Project.belongsToMany(User, { through: UserProject });

// User.belongsTo(Project);
// Project.belongsTo(User);

// Task.belongsTo(Project, { as: 'project' });
// Project.hasMany(Task, { as: 'tasks', foreignKey: 'projectId' });

Task.belongsTo(Project);
Project.hasMany(Task);

module.exports = {
  conn,
  // seed,
  syncAndSeed,
  models: {
    User,
    Project,
    UserProject,
    Task
  }
}
