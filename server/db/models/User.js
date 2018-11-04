const conn = require('../conn');
const { Sequelize } = conn;
const jwt = require('jwt-simple');

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

User.authenticate = async function(email, password) {
  const user = await this.findOne({
    where: { email, password }
  })
  if(user) {
    const token = jwt.encode({ id: user.id }, 'foo');
    return token;
  }
  throw('invalid login');
}

User.exchangeTokenForUser = async function(token) {
  try {
    const id = jwt.decode(token, 'foo').id;
    const user = await this.findById(id);
    if(user) {
      return user;
    }
    throw { status: 401 };
  } catch(err) {
    console.error(err);
  }
}

module.exports = User;