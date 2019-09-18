const CastError = require('./Errors');

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
const isString = input => {
  return typeof input === 'string';
};

/**
 * Is this a number
 * @param input
 * @returns {boolean}
 */
const isNumber = input => {
  return typeof input === 'number';
};

/**
 * Is this an array?
 * @param input
 * @returns {boolean}
 */
const isArray = input => {
  return input instanceof Array;
};

/**
 * Is this an object?
 * @param input
 * @returns {boolean}
 */
const isObject = input => {
  if(isArray(input)) {
    return false;
  } else {
    return typeof input === 'object';
  }
};

/**
 * Is this a function?
 * @param input
 * @returns {boolean}
 */
const isFunction = input => {
  return typeof input === 'function';
};

/**
 * Is this a boolean?
 * @param input
 * @returns {boolean}
 */
const isBoolean = input => {
  return typeof input === 'boolean';
};

/**
 * Is this an array of strings?
 * @param {array} input 
 * @returns {boolean}
 */
const isArrayOfStrings = (input) => {
  return input.every(isString);
};

/**
 * Is it an array of numbers?
 * @param input
 * @returns {boolean}
 */
const isArrayOfNumbers = (input) => {
  return input.every(isNumber);
};

/**
 * Is it an array of objects?
 * @param input
 * @returns {boolean}
 */
const isArrayOfObjects = (input) => {
  return input.every(isObject);
};

/**
 * Is it an array of booleans?
 * @param input
 * @returns {boolean}
 */
const isArrayOfBooleans = (input) => {
  return input.every(isBoolean);
};

/**
 * Based on a set of rules, what is correct validator?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param rules
 * @returns {boolean}
 */
const getValidator = (input) => {
  const validatorList = {
    string: isString,
    number: isNumber,
    array: isArray,
    object: isObject,
    function: isFunction,
    boolean: isBoolean,
    numbers: isArrayOfNumbers,
    strings: isArrayOfStrings,
    objects: isArrayOfObjects,
    booleans: isArrayOfBooleans,
  };
  return validatorList[input];
};

/**
 * @param {string} input
 * @return {string}
 */

const toString = input => {
  if(isArray(input) || isObject(input)) {
    throw new CastError(input);
  } else {
    return String(input);
  }
};

/**
 * @param {number} input
 * @return {number}
 */

const toNumber = input => {
  if(isNumber(input) || isString(input) && input.match(/[0-9]/)) {
    return Number(input);
  } else {
    return new CastError(input);
  }
};

/**
 * @param {number} input
 * @return {number}
 */

const toBoolean = input => {
  if(isBoolean(input)) {
    return Boolean(input);
  } else if(isString(input)) {
    if(input === 'true') {
      return true;
    } else if(input ==='false') {
      return false;
    } else {
      throw new CastError(input);
    }
  } else if(isNumber(input)) {
    if(input === 0 || input === 1) {
      return Boolean(input);
    } else {
      throw new CastError(input);
    }
  } else {
    throw new CastError(input);
  }
};

// const toDate = input => {
//   if(toDate(input)) {
//     return toDate(input);
//   } else if {
//     throw new CastError(input);
//   }
// };

const getCaster = input => {
  const casterList = {
    string: toString,
    number: toNumber,
    boolean: toBoolean,
    // date: toDate,    
  };
  return casterList[input];
};

module.exports = {
  isString,
  isNumber,
  isArray,
  isObject,
  isFunction,
  isBoolean,
  toString,
  toNumber,
  toBoolean,
  // toDate,

  isArrayOfStrings,
  isArrayOfNumbers,
  isArrayOfObjects,
  isArrayOfBooleans,

  getValidator,
  getCaster,
};