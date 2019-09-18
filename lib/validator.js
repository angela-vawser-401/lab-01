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



const toString = input => {
  if((input === 'string') || (input === 'number') || (input === 'boolean') || (input === 'date')) {
    return String;
  } else {
    return CastError;
  }
};

const toNumber = input => {
  if((input === 'string') || (input === 'number') || (input === 'date')) {
    return Number;
  } else {
    return CastError;
  }
};

const toBoolean = input => {
  if((input === 'string') || (input === 'number') || (input === 'boolean') || (input === 'date')) {
    return Boolean;
  } else if((input === 'true') || (input === 'false')) {
    return Boolean;
  } else if((input === 0) || (input === 1)) {
    return Boolean;
  } else {
    return CastError;
  }
};

const toDate = input => {
  if(input === 'date') {
    return toDate;
  } else {
    return CastError;
  }
};

const getCaster = input => {
  const casterList = {
    string: toString,
    number: toNumber,
    boolean: toBoolean,
    date: toDate,    
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
  toDate,

  isArrayOfStrings,
  isArrayOfNumbers,
  isArrayOfObjects,
  isArrayOfBooleans,

  getValidator,
  getCaster,
};