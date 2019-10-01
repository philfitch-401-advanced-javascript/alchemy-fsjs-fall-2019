const request = require('../request');
const db = require('../db');
const { matchMongoId } = require('../match-helpers');

describe('locations api', () => {
  beforeEach(() => {
    return db.dropCollection('locations');
  });

  const location1 = {
    name: 'Test Location 1',
    address: '97209'
  };

  function postLocation(location) {
    return request
      .post('/api/locations')
      .send(location)
      .expect(200)
      .then(({ body }) => body);
  }

  it('add a location gets geo location', () => {
    return postLocation(location1).then(location => {
      expect(location).toMatchInlineSnapshot(
        matchMongoId,
        `
        Object {
          "__v": 0,
          "_id": StringMatching /\\^\\[a-f\\\\d\\]\\{24\\}\\$/i,
          "address": "97209",
          "location": Object {
            "latitude": 45.5266975,
            "longitude": -122.6880503,
          },
          "name": "Test Location 1",
          "shows": Array [],
        }
      `
      );
    });
  });

  it('adds a show to a location', () => {
    const show = { name: 'Good Thymes' };

    return postLocation(location1)
      .then(location => {
        return request
          .post(`/api/locations/${location._id}/shows`)
          .send(show)
          .then(({ body }) => body);
      })
      .then(show => {
        expect(show).toMatchInlineSnapshot(
          matchMongoId,
          `
          Object {
            "__v": 0,
            "_id": StringMatching /\\^\\[a-f\\\\d\\]\\{24\\}\\$/i,
            "address": "97209",
            "location": Object {
              "latitude": 45.5266975,
              "longitude": -122.6880503,
            },
            "name": "Test Location 1",
            "shows": Array [],
          }
        `
        );
      });
  });
});
