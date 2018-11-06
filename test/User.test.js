const User = require('../server/db/models/User');

describe('A User Model', () => {
  
  test('exists', () => {
    expect(User).toBeDefined();
  });

});

describe('User data', () => {

  test('has 2 preseeded users', async () => {
    const users = await User.findAll();
    expect(users).toHaveLength(2);
  });

  test('can find a user', async () => {
    const user = await User.findOne({
      where: { email: 'jgrubard@gmail.com' }
    });
    expect(user.email).toEqual('jgrubard@gmail.com');
  });

  describe('can create a new user', () => {
    const userData = {
      email: 'mscott@dundermifflin.com',
      password: 'number1BOSS'
    }

    let user;
    beforeAll( async () => {
      const _user = await User.create(userData);
      user = _user;
    });

    afterAll( async () => {
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
    beforeAll( async () => {
      const _user = await User.create(userData);
      user = _user;
    });

    afterAll( async () => {
      const user = await User.findOne({
        where: { email: 'mscott@dundermifflin.com'}
      });
      await user.destroy();
    });

    test('findPassword finds a password in the db when given an email', async () => {
      const password = await User.findPassword('mscott@dundermifflin.com');
      expect(password).toEqual('number1BOSS');
    });
  });

});

