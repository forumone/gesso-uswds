import { isMap, YAMLMap, type CollectionTag, type Schema } from 'yaml';

/**
 * Class to represent a USWDS token. This class acts as a signifier that the
 * token should first be looked up and then passed through a USWDS Sass
 * function. The internal representation uses two slots:
 * 1. `token`, which is a reference to another token (or a string or numeric
 *    value, but in that case just use the SassValue class).
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
 * 2. Object notation. This uses a map with `token` and `fn` keys. The `token`
 *    key is used as a parameter in the `fn` in the resulting SCSS.
 *
 *    ```yaml
 *    foo: !uswds
 *      token: uswds.color-base
 *      fn: 'color'
 *    ```
 */
export class UswdsValue extends YAMLMap {
  override tag = '!uswds';

  token: unknown;

  fn: string;

  /**
   * @param schema The YAML schema.
   * @param token The name of a USWDS token.
   * @param fn The Sass function to use to look up the value.
   */
  constructor(schema?: Schema, token?: unknown, fn: unknown = 'units') {
    super(schema);
    this.token = token;
    this.fn = typeof fn === 'string' && fn !== '' ? fn : 'units';
  }

  /** Get the current token. */
  getToken(): unknown {
    return this.token;
  }

  /** Set the token. */
  setToken(newVal: unknown): void {
    this.token = newVal;
  }

  /** The Sass expression for this value, e.g. `units(5)`. */
  toSass(): string {
    return `${this.fn}(${String(this.token)})`;
  }
}

// YAML custom tag for the UswdsValue class (cf. https://eemeli.org/yaml/#custom-data-types)
export const tag: CollectionTag = {
  identify: (value: unknown) => value instanceof UswdsValue,
  tag: '!uswds',
  nodeClass: UswdsValue,
  collection: 'map',
  resolve(value: unknown) {
    if (isMap(value)) {
      // This is a two-value YAML document: { token, fn } - deserialize into a
      // full UswdsValue instance.
      return new UswdsValue(undefined, value.get('token'), value.get('fn'));
    }

    return new UswdsValue(undefined, value);
  },
};
