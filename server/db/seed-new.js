// require('dotenv').config();
// const conn = require('./conn');
// const User = require('./models/User');

// const Task = require('./models/Task');
// const Project = require('./models/Project');
// const UserProject = require('./models/UserProject');

// const bcrypt = require('bcryptjs');
// const salt = bcrypt.genSaltSync(10);

// const jeremyPassword = bcrypt.hashSync(process.env.JG_PW, salt);
// const suPassword = bcrypt.hashSync(process.env.SS_PW, salt);

// const sync = () => conn.sync({ force: true });

// const seed = () => {
//   return Promise.all([
//     User.create({
//       email: 'jgrubard@gmail.com',
//       password: jeremyPassword
//     }),
//     User.create({
//       email: 'su@gmail.com',
//       password: suPassword
//     })
//   ])
// }

// const syncAndSeed = () => {
//   return sync()
//     .then(() => {
//       console.log('2. seeding database');
//       return seed();
//     })
//     .then(() => console.log('3. database seeded'))
//     .then(() => {
//       console.log('4. closing connection');
//       conn.close();
//     })
//     .catch(err => {
//       console.log('Error Seeding Database');
//       console.error(err);
//     });
// }

// module.exports = syncAndSeed;
