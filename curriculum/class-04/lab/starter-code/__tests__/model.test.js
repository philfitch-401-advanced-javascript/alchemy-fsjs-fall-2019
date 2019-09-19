jest.mock('?', () => {
  return {
    // ?
  };
});

const Model = require('../lib/models/model');

// require any mock expectations
// ?

describe('Model', () => {

  // arrange
  const schemaConfig = {
    // doesn't actually mater as long as passed to schema:
    name: {
      type: String,
      required: true
    }
  };

  // act
  const Cats = new Model('cats', schemaConfig);

  // write some tests
  it('creates a schema and document collection', () => {

    // assert:
    
    // Cats.schema should be an instance of Schema, 
    // with schemaConfig as saved schema

    // Cats.collection should be an instance of DocumentCollection
    // with collection.folder ending in "cats"
    
  });

  // test rest of model methods. 
});