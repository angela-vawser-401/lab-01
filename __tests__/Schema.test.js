const Schema = require('../lib/Schema');

describe('Schema', () => {

  // add a test schema

  it('strings', () => {
    expect(validator.getCaster('string')).toBe(validator.toString);
  });
  
  it('numbers', () => {
    expect(validator.getCaster('number')).toBe(validator.toNumber);
  });

  it('booleans', () => {
    expect(validator.getCaster('boolean')).toBe(validator.toBoolean);
  });

  it('date', () => {
    expect(validator.getCaster('date')).toBe(validator.toDate);
  });

});