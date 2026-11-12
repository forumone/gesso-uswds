import { parseDocument } from 'yaml';
import { describe, expect, it } from 'vitest';

import { UswdsValue, tag } from './UswdsValue.ts';

function parse(source: string) {
  return parseDocument(source, { customTags: [tag] });
}

describe('UswdsValue', () => {
  it('stores the token and function', () => {
    const value = new UswdsValue(undefined, 'uswds.color-base', 'color');

    expect(value.token).toBe('uswds.color-base');
    expect(value.fn).toBe('color');
    expect(value.tag).toBe('!uswds');
  });

  it('defaults to the units() function', () => {
    expect(new UswdsValue(undefined, 5).fn).toBe('units');
    expect(new UswdsValue(undefined, 5, undefined).fn).toBe('units');
    expect(new UswdsValue(undefined, 5, '').fn).toBe('units');
  });

  it('gets and sets the token', () => {
    const value = new UswdsValue(undefined, 'uswds.foo');
    value.setToken(4);

    expect(value.getToken()).toBe(4);
  });

  it('renders as a Sass function call', () => {
    expect(new UswdsValue(undefined, 5).toSass()).toBe('units(5)');
    expect(new UswdsValue(undefined, 'blue-60v', 'color').toSass()).toBe(
      'color(blue-60v)'
    );
  });
});

describe('tag', () => {
  it('identifies only UswdsValue instances', () => {
    expect(tag.identify?.(new UswdsValue())).toBe(true);
    expect(tag.identify?.({ token: 'x' })).toBe(false);
    expect(tag.identify?.('x')).toBe(false);
  });

  it('parses the object notation', () => {
    const doc = parse('foo: !uswds\n  token: uswds.color-base\n  fn: color\n');
    const value = doc.get('foo');

    expect(doc.errors).toEqual([]);
    expect(value).toBeInstanceOf(UswdsValue);
    expect((value as UswdsValue).token).toBe('uswds.color-base');
    expect((value as UswdsValue).fn).toBe('color');
  });

  it('parses the object notation without a function', () => {
    const value = parse('foo: !uswds\n  token: uswds.gap\n').get('foo');

    expect((value as UswdsValue).fn).toBe('units');
  });

  it('parses the single-value shorthand as a tagged scalar', () => {
    // As with !sass, the yaml package can't apply a collection tag to a
    // scalar, so `transform` turns it into a UswdsValue.
    const doc = parse('foo: !uswds uswds.column-gap-desktop\n');
    const node = doc.get('foo', true) as { tag?: string; value?: unknown };

    expect(doc.errors).toEqual([]);
    expect(node.tag).toBe('!uswds');
    expect(node.value).toBe('uswds.column-gap-desktop');
  });

  it('resolves a non-map value to a UswdsValue holding it as the token', () => {
    const resolve = tag.resolve as unknown as (value: unknown) => UswdsValue;
    const value = resolve('uswds.foo');

    expect(value).toBeInstanceOf(UswdsValue);
    expect(value.token).toBe('uswds.foo');
    expect(value.fn).toBe('units');
  });
});
