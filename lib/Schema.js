/* import and use validators */
const validators = require('./validator');
const { ModelError } = require('./Errors');

class Schema {
  /**
   * Create a model schema
   * @param {object} schema - the schema to apply to models
   */
  constructor(schema) {
    this.schema = schema;
  }

  /**
   * Run validation on the supplied model 
   * @param {object} model - the model to validate
   * @throws {ModelError} throws if model does not conform to schema
   * @returns {object} - validated data record
   */

  validate(model) {
    let newModel = {};
    try {
      let keys = Object.keys(this.schema);

      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const type = this.schema[key].type;
        const caster = validators.getCaster(type);
        newModel[key] = caster(model[key]);
      }
      return newModel;
    }
    catch (error) {
      throw new ModelError(error);
    }
  }
}

module.exports = Schema;