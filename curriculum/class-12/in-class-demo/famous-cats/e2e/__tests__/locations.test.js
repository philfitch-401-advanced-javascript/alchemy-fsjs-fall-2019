jest.mock('../../lib/services/maps-api');
const request = require('../request');
const db = require('../db');
const { matchMongoId } = require('../match-helpers');
const getLocation = require('../../lib/services/maps-api');

getLocation.mockResolvedValue({
  latitude: 45.5266975,
  longitude: -122.6880503
});

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

  const show1 = { name: 'Good Thymes' };

  function postLocationWithShow(location, show) {
    return postLocation(location)
      .then(location => {
        return request
          .post(`/api/locations/${location._id}/shows`)
          .send(show)
          .expect(200)
          .then(({ body }) => [location, body]);
      });
  }

  it('adds a show to a location', () => {

    return postLocationWithShow(location1, show1)
      .then(([, shows]) => {
        expect(shows[0]).toEqual({
          ...matchMongoId,
          ...show1,
          date: expect.any(String)
        });
      });
          
  });

  it('removes a show', () => {

    return postLocationWithShow(location1, show1)
      .then(([location, shows]) => {
        return request
          .delete(`/api/locations/${location._id}/shows/${shows[0]._id}`)
          .expect(200);
      })
      .then(({ body }) => {
        expect(body.length).toBe(0);
      });
  });

});
