const request = require('supertest');
const app = require('../../../server/app');
const { User } = require('../../../server/db').models;

describe('Loads express', () => {

  test('responds to /', async () => {
    const response = await request(app).get('/')
    expect(response.statusCode).toBe(200);
  });

  test('sends 404 if anything else', async () => {
    const response = await request(app).get('/anything')
    expect(response.statusCode).toBe(404);
  });

});


describe('User Route Testing', () => {

  test('responds with json', async () => {
    const response = await request(app).get('/api/users').set('Accept', 'application/json');
    expect(response.header['content-type']).toBe('application/json; charset=utf-8');
    expect(response.statusCode).toBe(200);
  });

  test('can GET /users', async () => {
    const response = await request(app).get('/api/users').set('Accept', 'application/json');
    expect(response.statusCode).toBe(200);
    const users = response.body;
    expect(Array.isArray(users)).toBe(true);
    expect(users).toHaveLength(2);
    expect(users[0].email).toEqual('jgrubard@gmail.com')
  });

  // test('can POST /sessions - login', async () => {
  //   const user = await User.findOne({ where: { email: 'jgrubard@gmail.com' }});
  //   // console.log(user.get());
  //   const { email, password } = user;
  //   const token = await User.authenticate(email, password);
  //   // console.log(token)
  //   const response = await request(app).post('/api/sessions/login').send({ email, password }).set('Accept', 'application/json').set('Authorization', token);
  //   console.log(response);
  //   expect(response.statusCode).toBe(200);

  // });

  // test('can POST /sessions - login', async () => {
  //   // const user = {
  //   //   email: 'mscott@dundermifflin.com',
  //   //   password: 'number1BOSS'
  //   // }
  //   const user = await User.findOne({ where: { email: 'jgrubard@gmail.com' }})
  //   return request(app)
  //     .post('/api/sessions/login')
  //     .set('Accept', 'application/json')
  //     .send(user.get())
  //     // .expect(200)
  //     .then(response => console.log(response))
  //     // .end((err, res) => {
  //       // console.log(err, res)
  //       // expect(res.body.email).toEqual('jgrubard@gmail.com')
  //       // expect(res.statusCode).toEqual(200)
  //     // })

  // });

});