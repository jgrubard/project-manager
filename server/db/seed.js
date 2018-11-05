require('dotenv').config();
const conn = require('./conn');
const User = require('./models/User');

const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const jeremyPassword = bcrypt.hashSync(process.env.JG_PW, salt);
const suPassword = bcrypt.hashSync(process.env.SS_PW, salt);

const users = [
  {
    email: 'jgrubard@gmail.com',
    password: jeremyPassword
  },
  {
    email: 'su@gmail.com',
    password: suPassword
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