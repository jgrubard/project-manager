require('dotenv').config();
const conn = require('./conn');
const User = require('./models/User');

const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const jeremyPassword = bcrypt.hashSync(process.env.JG_PW, salt);
const suPassword = bcrypt.hashSync(process.env.SS_PW, salt);

const seed = () => {
  return Promise.all([
    User.create({
      email: 'jgrubard@gmail.com',
      password: jeremyPassword
    }),
    User.create({
      email: 'su@gmail.com',
      password: suPassword
    })
  ]);
}

console.log('1. syncing database');

conn.sync({ force: true })
  .then(() => {
    console.log('2. database synced');
    console.log('3. seeding database');
    return seed();
  })
  .then(() => console.log('4. database seeded'))
  .then(() => {
    console.log('5. closing connection');
    conn.close();
    console.log('6. connection closed');
  })
  .catch(err => {
    console.log('uh-oh, there was an error seeding!')
    console.log(err);
  })


// seed()
//   .then(() => {
//     console.log('4. closing connection');
//     conn.close();
//     console.log('5. connection closed');
//   })
//   .catch(err => {
//     console.log('ERROR: database not seeded');
//     console.log(err);
//   });



// const users = [
  // {
  //   email: 'jgrubard@gmail.com',
  //   password: jeremyPassword
  // },
  // {
  //   email: 'su@gmail.com',
  //   password: suPassword
  // }
// ];

// conn.sync({ force: true })
//   .then(() => {
//     console.log('establishing connection');
//     return User.seedUsers(users);
//   })
//   .then(() => {
//     console.log('database seeded');
//     conn.close();
//     console.log('connection closed');
//   })
//   .catch(err => {
//     console.log('error seeding database');
//     console.log(err);
//   })

// const seed = async () => {
//   try {
//     console.log('establishing connection');
//     await conn.sync({ force: true });
//     console.log('connection established!');
//     const seededUsers = users.map(user => User.create(user))
//     await Promise.all(seededUsers);
//     console.log('database seeded');
//     conn.close();
//     console.log('connection closed');
//   } catch(err) {
//     console.log('error seeding database');
//     console.log(err);
//   }
// }

// seed();

// module.exports = seed;