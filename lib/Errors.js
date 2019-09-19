class CastError extends Error {
  constructor(expectedType, providedValue) {
    super(`Oops, cannot coerce data type`);
    this.expectedType = expectedType;
    this.providedValue = providedValue;
  }
}

class ModelError extends Error {
  constructor(error) {
    super('Hey Fartface, you got an ERROR!!!', error);
  }
}

module.exports = {
  CastError,
  ModelError,
};