const conn = require('../conn');
const { Sequelize } = conn;

const User = conn.define('user', {
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

User.seedUsers = function(users) {
  users = users.map(user => this.create(user));
  return Promise.all(users);
}

User.authenticate = function(email, password) {
  return this.findOne({
    where: { email, password }
  })
  .then(user => {
    if(user) {
      const token = jwt.encode({ id: user.id }, 'foo');
      return token;
    }
    throw('invalid login');
  });
}

module.exports = User;