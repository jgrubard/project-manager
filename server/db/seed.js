const conn = require('./conn');
const User = require('./models/User');

const users = [
  {
    email: 'jgrubard@gmail.com',
    password: 'jeremy'
  },
  {
    email: 'su@gmail.com',
    password: 'su'
  }
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