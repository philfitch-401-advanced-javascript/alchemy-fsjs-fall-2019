
class CastError extends Error {
  constructor(expectedType, providedValue) {
    super(`Cannot cast ${providedValue} to ${expectedType}`);
    this.expectedType = expectedType;
    this.providedValue = providedValue;
  }
}

class ModelError extends Error {

}

module.exports = {
  CastError,
  ModelError
};