
class CastError extends Error {
  constructor(expectedType, providedValue) {
    super(`Oops, cannot coerce data type`);
    this.expectedType = expectedType;
    this.providedValue = providedValue;
  }
}

class ModelError extends Error {

}

module.exports = {
  CastError,
  ModelError,
};

// use things.test.js as an example