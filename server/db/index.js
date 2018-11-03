const conn = require('./conn');

const User = require('./models/User');

// const sync = () => {
//   return conn.sync({ force: true });
// }

// const seed = async () => {
//   try {
//     const users = await Promise.all([
//       User.create({ name: 'Jeremy' }),
//       User.create({ name: 'Supattra' })
//     ]);
//     return users;
//   } catch(err) {
//     console.log(err);
//   }

// }

module.exports = {
  // conn,
  // sync,
  // seed,
  models: {
    User
  }
}
