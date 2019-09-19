const Schema = require('../lib/Schema');
const { ModelError } = require('../lib/Errors');

describe('Schema', () => {

  // [x] doesn't include extra fields
  // [x] omits non-required fields that are missing
  // [x] casts field values to correct type
  
  // [x] throws on missing required field
  // [x] throws on un-castable type

  const schema = new Schema({
    name: {
      type: String,
      required: true
    },
    isFun: {
      type: Boolean,
      required: false
    },
    luckyNumber: {
      type: Number,
      required: false
    }
  });


  it('validates a correct model', () => {
    const model = {
      name: 'Good',
      isFun: true,
      luckyNumber: 79
    };

    const record = schema.validate(model);

    expect(record).not.toBe(model);
    expect(record).toEqual(model);
  });

  it('ignores properties not in schema', () => {
    const model = {
      name: 'Good',
      isFun: true,
      luckyNumber: 79,
      removeMe: true
    };

    const record = schema.validate(model);

    delete model.removeMe;

    expect(record).toEqual(model);
  });

  it('empty fields are omitted if missing', () => {
    const model = {
      name: 'Good',
    };

    const record = schema.validate(model);

    expect(Object.keys(record).length).toBe(1);
    expect(record).toEqual(model);
  });

  it('casts property values to correct type', () => {
    const model = {
      name: 'name',
      luckyNumber: '79'
    };

    const record = schema.validate(model);

    expect(record).toEqual({
      name: 'name',
      luckyNumber: 79
    });
  });

  it('throws ModelError on missing required field', () => {
    const model = {};

    expect(() => {
      schema.validate(model);
    }).toThrow(ModelError);
  });

  it('throws ModelError on uncastable type', () => {
    const model = {
      name: 'Good',
      luckyNumber: 'abc'
    };

    expect(() => {
      schema.validate(model);
    }).toThrow(ModelError);
  });

});