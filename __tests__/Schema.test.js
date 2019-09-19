const Schema = require('../lib/Schema');
const { ModelError } = require('../lib/Errors');

describe('Schema', () => {
  const personSchema = {

    firstName: {
      type: 'string',
      required: true,
    },

    lastName: {
      type: 'string',
      required: true,
    },
      
    married: {
      type: 'boolean',
      required: true,
    },

    kids: {
      type: 'number',
      required: true,
    },

  };

  const newSchema = new Schema(personSchema);

  const newDataSample = {
    
    'firstName': 'Angela',
    'lastName': 'Vawser',
    'married': true,
    'kids': 0,
  };

  const needsCoersionSample = {
    
    'firstName': 'Angela',
    'lastName': 'Vawser',
    'married': 'true',
    'kids': '0',
  };

  const invalidModel = {
    
    'firstName': [],
    'lastName': 'Vawser',
    'married': 'true',
    'kids': '0',
  };
  
  // add a test schema

  it('validates model', () => {
    expect(newSchema.validate(newDataSample)).toEqual(newDataSample);
    expect(newSchema.validate(needsCoersionSample)).toEqual(newDataSample);
  });

  it('invalid model', () => {
    expect( () => {
      newSchema.validate(invalidModel)
    }).toThrow(ModelError);
  });
});