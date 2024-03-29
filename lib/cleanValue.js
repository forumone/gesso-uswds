// @ts-check

const { NaniError } = require('nani');

/**
 * Prepares a JS value for output as a Sass value.
 *
 * @param {number | string} value
 * @returns {number | string}
 */
function cleanValue(value) {
  if (typeof value === 'number') {
    return value;
  }

  if (typeof value !== 'string') {
    throw new NaniError({
      shortMessage: `Value passed to cleanValue() is ${typeof value}, not a string or number`,
    });
  }

  if (!value.includes(' ') && !value.includes('..')) {
    return value;
  }
  return value.includes("'") ? `"${value}"` : `'${value}'`;
}

module.exports = cleanValue;
