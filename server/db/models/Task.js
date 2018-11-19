const conn = require('../conn');
const { Sequelize } = conn;

const Task = conn.define('task', {
  name: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

module.exports = Task;