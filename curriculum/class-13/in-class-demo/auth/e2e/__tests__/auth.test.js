const request = require('../request');
const { dropCollection } = require('../db');
const { signupUser } = require('../data-helpers');

describe('Auth API', () => {

  beforeEach(() => dropCollection('users'));

  let token;
  beforeEach(() => {
    return signupUser()
      .then(user => {
        token = user.token;
      });
  });

  it('signs up a user', () => {
    expect(token).toBeDefined;
  });

  it('verifies a token', () => {
    return request
      .get('/api/auth/verify')
      .set('Authorization', token)
      .expect(200);
  });

  it('fails on wrong password', () => {
    return request
      .post('/api/auth/signin')
      .send({
        email: 'me@me.com',
        password: 'bad'
      })
      .expect(401)
      .then(({ body }) => {
        expect(body.error).toBe('Invalid email or password');
      });
  });

  it('cannot signup with same email', () => {
    return request
      .post('/api/auth/signup')
      .send({
        email: 'me@me.com',
        password: 'abc'
      })
      .expect(400)
      .then(({ body }) => {
        expect(body.error).toBe('Email already in use');
      });
  });

  it('Gives 401 on bad email signin', () => {
    return request
      .post('/api/auth/signin')
      .send({
        email: 'bad@me.com',
        password: 'abc'
      })
      .expect(401)
      .then(({ body }) => {
        expect(body.error).toBe('Invalid email or password');
      });
  });

});