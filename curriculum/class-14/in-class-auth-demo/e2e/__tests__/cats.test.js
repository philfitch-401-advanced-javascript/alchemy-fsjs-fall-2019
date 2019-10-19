const request = require('../request');
const db = require('../db');
const { signupUser } = require('../data-helpers');

describe('Cats API', () => {
  beforeEach(() => db.dropCollection('users'));
  beforeEach(() => db.dropCollection('cats'));

  let user = null;
  beforeEach(() => {
    return signupUser().then(newUser => (user = newUser));
  });

  const cat = {
    name: 'Felix',
    year: 2019
  };

  it('post a cat for this user', () => {
    return request
      .post('/api/cats')
      .set('Authorization', user.token)
      .send(cat)
      .expect(200)
      .then(({ body }) => {
        expect(body.owner).toBe(user._id);
        expect(body).toMatchInlineSnapshot(
          {
            _id: expect.any(String),
            owner: expect.any(String)
          },
          `
          Object {
            "__v": 0,
            "_id": Any<String>,
            "hasSidekick": false,
            "lives": 9,
            "media": Array [],
            "name": "Felix",
            "owner": Any<String>,
            "year": 2019,
          }
        `
        );
      });
  });
});
