// @ts-check

const { YAMLMap } = require('yaml');

/**
 * Class to represent a token that represents a USWDS token. This class acts as
 * a signifier that the token should first be looked up and then passed through
 * a USWDS sass function. The internal representation uses two slots:
 * 1. `value`, which is a reference to another token (or a string or numeric
 *     value, but in that case just use the SassValue class).
 * 2. `fn`, the USWDS function used to look up the token, e.g. units.
 *
 * A value of this class can be constructed in the design tokens file by using
 * the `!uswds` tag. There are two accepted syntaxes:
 * 1. Single-value shorthand. The units() function will be used as a default.
 *
 *    ```yaml
 *    foo: !uswds uswds.column-gap-desktop
 *    ```
 *
 * 2. Object notation. This uses a map with `value` and `function` keys. The
 *    `value` key is used as a parameter in the `function` in the resulting
 *    SCSS
 *
 *    ```yaml
 *    foo: !uswds
 *      value: uswds.color-base
 *      fn: 'color'
 *    ```
 */
class UswdsValue extends YAMLMap {
  tag = '!uswds';

  /**
   * @param {import('yaml').Schema} [schema] The YAML schema.
   * @param {import('yaml').ParsedNode | null} value The name of a USWDS token.
   * @param {string} [fn] The Sass function to use to look up the value.
   */
  constructor(schema, value, fn = 'units') {
    super(schema);
    this.token = value;
    this.fn = fn;
  }

  /**
   * Get the current value.
   * @return {import('yaml').ParsedNode | null}
   */
  getToken() {
    return this.token;
  }

  /**
   * Set the value.
   * @param {import('yaml').ParsedNode | null} newVal
   */
  setToken(newVal) {
    this.token = newVal;
  }
}

// YAML custom tag for the UswdsValue class
/** @type {import('yaml').CollectionTag} */
const tag = {
  identify: value => value instanceof UswdsValue,
  tag: '!uswds',
  format: 'map',
  nodeClass: UswdsValue,
  collection: 'map',
  resolve(value) {
    // This is a two-value YAML document: { value, fn }.
    // Deserialize into a full UswdsValue instance.
    return new UswdsValue(
      undefined,
      value.get('token'),
      value.get('fn')
    );
  },
};

/** @type {import('yaml').ScalarTag} */
const scalarTag = {
  identify: value => value instanceof UswdsValue,
  format: 'scalar',
  tag: '!uswds',
  resolve(value) {
    return new UswdsValue(undefined, value);
  },
};

module.exports = {
  UswdsValue,
  tag,
  scalarTag,
};
