const Location = require('../location');
const { ObjectId } = require('mongoose').Types;

describe('Location model', () => {

  it('valid model all properties', () => {
    const data = {
      name: 'Main Plaza',
      address: '97209',
      location: {
        latitude: 45,
        longitude: -35
      },
      shows: [{
        name: 'The Big Show'
      }]
    };

    const location = new Location(data);
    const errors = location.validateSync();
    expect(errors).toBeUndefined();

    const json = location.toJSON();

    expect(json).toEqual({
      ...data,
      shows: [{
        _id: expect.any(Object),
        date: expect.any(Date),
        ...data.shows[0]
      }],
      _id: expect.any(Object),
    });
  });

  it('validates required properties', () => {
    const data = {
      shows: [{}]
    };
    const location = new Location(data);
    const { errors } = location.validateSync();
    expect(errors.name.kind).toBe('required');
    expect(errors['shows.0.name'].kind).toBe('required');
  });

});