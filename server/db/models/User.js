const conn = require('../conn');
const { Sequelize } = conn;

const User = conn.define('user', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

User.seedUsers = function(users) {
  users = users.map(user => this.create(user));
  return Promise.all(users);
}

module.exports = User;