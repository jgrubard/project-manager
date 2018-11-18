const conn = require('./conn');

const User = require('./models/User');
const Project = require('./models/Project');
const UserProject = require('./models/UserProject');

User.belongsToMany(Project, { through: UserProject });
Project.belongsToMany(User, { through: UserProject });

module.exports = {
  conn,
  models: {
    User,
    Project,
    UserProject
  }
}
