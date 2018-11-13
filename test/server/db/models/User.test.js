require('dotenv').config();
const User = require('../../../../server/db/models/User');
const jwt = require('jwt-simple');

describe('The User Model', () => {

  let users;
  beforeEach( async() => {
    users = await User.findAll()
  });

  describe('A user model exists', () => {

    test('User model is defined', () => {
      expect(User).toBeDefined();
    });

  });

  describe('User data', () => {

    test('Has 2 preseeded users', async () => {
      expect(users).toHaveLength(2);
    });
  
    test('Can find a user', async () => {
      const user = await User.findOne({
        where: { email: 'jgrubard@gmail.com' }
      });
      expect(user.email).toEqual('jgrubard@gmail.com');
    });

  });

  describe('Can create a new user', () => {
    const userData = {
      email: 'mscott@dundermifflin.com',
      password: 'number1BOSS'
    }

    let user;
    beforeEach( async () => {
      const _user = await User.create(userData);
      user = _user;
    });

    afterEach( async () => {
      const user = await User.findOne({
        where: { email: 'mscott@dundermifflin.com'}
      });
      await user.destroy();
    });

    test('a new user exists', () => {
      expect(user).toBeDefined();
    });

    test('a new user has an email and password', () => {
      expect(user.email).toEqual('mscott@dundermifflin.com');
      expect(user.password).toEqual('number1BOSS');
    });

  });


    describe('User class methods', () => {

      const userData = {
        email: 'mscott@dundermifflin.com',
        password: 'number1BOSS'
      }

      let user;
      beforeEach( async () => {
        const _user = await User.create(userData);
        user = _user;
      });

      afterEach( async () => {
        const user = await User.findOne({
          where: { email: 'mscott@dundermifflin.com'}
        });
        await user.destroy();
      });

      test('`findPassword` finds a password in the db when given an email', async () => {
        const password = await User.findPassword('mscott@dundermifflin.com');
        expect(password).toEqual('number1BOSS');
      });

      test('`authenticate` makes sure the user has the correct credentials', async () => {
        const { email, password, id } = user;
        const expectedToken = jwt.encode({ id }, process.env.JWT_KEY );
        const token = await User.authenticate(email, password);
        expect(token).toEqual(expectedToken);
      });

      test('`authenticate` throws a 401 error with incorrect credentials', async () => {
        const { email, password } = user;
        try {
          const token = await User.authenticate(email, 'wrongPASSWORD');
          if(!token) throw 'incorrect credentials';
        } catch(err) {
          expect(err.status).toEqual(401);
        }
      });

      test('`exchangeTokenForUser` gets the correct user', async () => {
        const { email, password, id } = user;
        const expectedEmail = email;
        const token = await User.authenticate(email, password);
        const returnedUser = await User.exchangeTokenForUser(token);
        expect(expectedEmail).toEqual(returnedUser.email);
      });
  
    });

});

