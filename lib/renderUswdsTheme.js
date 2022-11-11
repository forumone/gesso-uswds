// @ts-check

'use strict';

const { NaniError } = require('nani');
const cleanValue = require('./cleanValue');

/**
 * Create Sass variables from a set of data.
 * @param {import('./types').GessoData} data
 * @return {string}
 */
function createSassVariables(data) {
  let output = "@forward 'uswds-core' with (\n";
  for (const [key, value] of Object.entries(data)) {
    switch (typeof value) {
      case 'string':
        output += ` $theme-${key}: '${value}',\n`;
        break;
      case 'number':
        output += ` $theme-${key}: ${cleanValue(value)},\n`;
        break;
      case 'boolean':
        output += ` $theme-${key}: ${value},\n`;
        break;
      default:
        output += ` $theme-${key}: ${cleanValue(value)},\n`;
        break;
    }
  }
  output += ');\n';
  return output;
}

/**
 * Render the USWDS Sass config variables.
 * @param {import('./types').GessoData} data
 */
function renderUswdsTheme(data) {
  if (typeof data !== 'object' || Array.isArray(data)) {
    throw new NaniError({
      shortMessage: `Expecting non-array object for rendering sass; got ${typeof data}`,
    });
  }
  try {
    return createSassVariables(data.uswds);
  } catch (error) {
    throw new NaniError({
      shortMessage: 'Unable to compile tokens to Sass',
      cause: error,
    });
  }
}

module.exports = renderUswdsTheme;
