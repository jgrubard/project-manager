const conn = require('../conn');
const { Sequelize } = conn;

const UserProject = conn.define('user_project', {
  role: {
    type: Sequelize.STRING
  }
});

module.exports = UserProject;