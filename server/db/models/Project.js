const conn = require('../conn');
const { Sequelize } = conn;

const Project = conn.define('project', {
  name: {
    type: Sequelize.STRING
  }
});

module.exports = Project;