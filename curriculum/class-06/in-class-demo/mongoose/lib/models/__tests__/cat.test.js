const Cat = require('../cat');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

describe('Cat model', () => {

  it('valid model all properties', () => {
    const data = {
      name: 'felix',
      // appearances: {
      //   pattern: 'tuxedo',
      //   mainColor: 'black'
      // },
      // lives: 9,
      // hasSidekick: false,
      // media: ['movies', 'comics'],
      // yearIntroduced: 1919,
      someDate: new Date()
    };

    const cat = new Cat(data);
    cat.validateSync();

    const json = cat.toJSON();
    expect(json._id._bsontype).toBe('ObjectID');

    expect(json).toEqual({
      ...data,
      _id: expect.any(Object),
    });
  });
});