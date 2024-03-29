// @ts-check

const os = require('os');
const yaml = require('yaml');
const readSource = require('./readSource');
const transform = require('./transform');
const renderSass = require('./renderSass');
const renderUswdsTheme = require('./renderUswdsTheme');
const renderJs = require('./renderJs');
const { SassValue } = require('./SassValue');
const sassTag = require('./SassValue').tag;
const sassScalarTag = require('./SassValue').scalarTag;
const { UswdsValue } = require('./UswdsValue');
const uswdsTag = require('./UswdsValue').tag;
const uswdsScalarTag = require('./UswdsValue').scalarTag;

const sassComment = `// stylelint-disable
// DO NOT EDIT THIS FILE.  This is a gitignored artifact created by Webpack.
// Design tokens should be edited in 00-config/config.design-tokens.yml`;

const uswdsSassComment = `// stylelint-disable
// DO NOT EDIT THIS FILE.  This is a gitignored artifact created by Webpack.
// Design tokens should be edited in 00-config/config.design-tokens.yml`;

const jsComment = `/* eslint-disable */
// DO NOT EDIT THIS FILE.  This is a gitignored artifact created by Webpack.
// Design tokens should be edited in 00-config/config.design-tokens.yml`;

/**
 * Webpack loader for config.design-tokens.yml
 *
 * Creates the processed JavaScript and Sass files and then calls the
 * async callback with the transformed YAML.
 * @this {import('webpack').LoaderContext<{}>}
 * @param {string} source
 */
function configLoader(source) {
  const callback = this.async();
  try {
    readSource(source)
      .then(transform)
      .then(
        /**
         * @this {import('webpack').LoaderContext<{}>}
         * @param {import('./types').TransformedSource} transformed
         */
        transformed => {
          const uswdsSass =
            uswdsSassComment + os.EOL + renderUswdsTheme(transformed.data);
          const sass = `${
            sassComment + os.EOL
          }@use '_uswds-theme-settings.artifact.scss' as *;${
            os.EOL
          }${renderSass(transformed.data)}`;
          const js = jsComment + os.EOL + renderJs(transformed.data);
          this.emitFile(
            '../source/00-config/_uswds-theme-settings.artifact.scss',
            uswdsSass
          );
          this.emitFile(
            '../source/00-config/_design-tokens.artifact.scss',
            sass
          );
          this.emitFile('../source/00-config/_GESSO.es6.js', js);
          callback(
            null,
            yaml.stringify(
              transformed.data,
              (_key, value) =>
                value instanceof SassValue
                  ? {
                      sass: value.sass,
                      fallback: value.fallback,
                    }
                  : value instanceof UswdsValue ? `${value.fn}(${value.token})` : value,
              {
                customTags: [sassTag, sassScalarTag, uswdsTag, uswdsScalarTag],
              }
            )
          );
        }
      );
    return source;
  } catch (err) {
    return callback(err);
  }
}

module.exports = configLoader;
