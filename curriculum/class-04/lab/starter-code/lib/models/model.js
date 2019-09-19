// require needed files

class Model {
  constructor(name, schemaConfig) {
    // Get a DocumentCollection instance from Database using name
    // and store on "this"

    // Create a Schema instance passing in config
    // and store on "this"

  }

  create(model) {
    // 1. validate model using schema
    // 2. save returned object to document collection
  }

  findById(id) {
    // use document collection to retrieve model
  }

  find() {
    // use document collection to retireve all models
  }
}