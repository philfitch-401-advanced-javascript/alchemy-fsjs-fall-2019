// require needed files

class Model {
  constructor(name, schemaConfig) {
    // Get a DocumentCollection instance from Database using name
    // and store _the promise_ on "this"

    // Create a Schema instance passing in config
    // and store on "this"

  }

  create(model) {
    // chain onto the this.collection promise
    // so that we know the db is ready
      // 1. validate model using schema
      // 2. save returned object to document collection
  }

  findById(id) {
    // chain onto the this.collection promise
    // so that we know the db is ready
      // use document collection to retrieve model
  }

  find() {
    // chain onto the this.collection promise
    // so that we know the db is ready
      // use document collection to retrieve all models
  }
}