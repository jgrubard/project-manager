const conn = require('./conn');
const User = require('./models/User');

const users = [
  { name: 'Jeremy', email: 'jgrubard@gmail.com' },
  { name: 'Supattra', email: 'su@gmail.com' }
];

const seed = async () => {
  try {
    console.log('establishing connection');
    await conn.sync({ force: true });
    console.log('connection established!');
    await User.seedUsers(users);
    console.log('database seeded');
    conn.close();
    console.log('connection closed');
  } catch(err) {
    console.log('error seeding database');
    console.log(err);
  }
}

seed();