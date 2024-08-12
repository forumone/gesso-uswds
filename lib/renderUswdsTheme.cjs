// @ts-check

const { NaniError } = require('nani');
const cleanValue = require('./cleanValue.cjs');
const { isCssVar, isColorSyntax, isNumberLike } = require('./cleanValue.cjs');

/**
 * Create Sass variables from a set of data.
 * @param {import('./types').GessoData} data
 * @return {string}
 */
function createSassVariables(data) {
  let output = "@forward 'uswds-core' with (\n";
  Object.entries(data).forEach(([key, value]) => {
    switch (typeof value) {
      case 'string':
        if (
          isCssVar(value) ||
          isColorSyntax(value) ||
          isNumberLike(value)
        ) {
          output += ` $theme-${key}: ${value},\n`;
        } else {
          output += ` $theme-${key}: ${value.includes("'") ? `"${value}"` : `'${value}'`},\n`;
        }
        break;
      case 'number':
        output += ` $theme-${key}: ${value},\n`;
        break;
      case 'boolean':
        output += ` $theme-${key}: ${value},\n`;
        break;
      default:
        output += ` $theme-${key}: ${cleanValue(value)},\n`;
        break;
    }
  });
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
