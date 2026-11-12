import { describe, expect, it } from 'vitest';

import { SassValue } from './SassValue.ts';
import {
  createSassVariables,
  formatUswdsValue,
  renderUswdsTheme,
} from './renderUswdsTheme.ts';
import { UswdsValue } from './UswdsValue.ts';

describe('formatUswdsValue', () => {
  it('quotes plain strings', () => {
    expect(formatUswdsValue('blue-60v')).toBe("'blue-60v'");
    expect(formatUswdsValue("it's")).toBe('"it\'s"');
  });

  it('leaves number-like, color and CSS variable strings unquoted', () => {
    expect(formatUswdsValue('-1px')).toBe('-1px');
    expect(formatUswdsValue('#fff')).toBe('#fff');
    expect(formatUswdsValue('rgb(0 0 0)')).toBe('rgb(0 0 0)');
    expect(formatUswdsValue('var(--foo)')).toBe('var(--foo)');
  });

  it('outputs numbers, booleans and null as-is', () => {
    expect(formatUswdsValue(7)).toBe('7');
    expect(formatUswdsValue(false)).toBe('false');
    expect(formatUswdsValue(null)).toBe('null');
  });

  it('outputs SassValues and UswdsValues as Sass', () => {
    expect(formatUswdsValue(new SassValue(undefined, 'foo()', 'x'))).toBe(
      'foo()'
    );
    expect(formatUswdsValue(new UswdsValue(undefined, 2))).toBe('units(2)');
  });

  it('rejects other values', () => {
    expect(() => formatUswdsValue({ a: 1 })).toThrow(/not a string or number/);
  });
});

describe('createSassVariables', () => {
  it('forwards uswds-core with $theme- settings', () => {
    expect(
      createSassVariables({ 'type-scale-md': 7, 'font-path': 'fonts' })
    ).toBe(
      "@forward 'uswds-core' with (\n $theme-type-scale-md: 7,\n $theme-font-path: 'fonts',\n);\n"
    );
  });

  it('forwards uswds-core without a with() clause when empty', () => {
    expect(createSassVariables({})).toBe("@forward 'uswds-core';\n");
  });
});

describe('renderUswdsTheme', () => {
  it('renders the uswds settings', () => {
    expect(renderUswdsTheme({ uswds: { 'column-gap-desktop': 5 } })).toBe(
      "@forward 'uswds-core' with (\n $theme-column-gap-desktop: 5,\n);\n"
    );
  });

  it('handles a missing uswds key', () => {
    expect(renderUswdsTheme({})).toBe("@forward 'uswds-core';\n");
  });

  it('rejects non-object data', () => {
    expect(() => renderUswdsTheme(null as never)).toThrow(
      'Expecting non-array object for rendering sass; got null'
    );
  });

  it('wraps rendering errors', () => {
    expect(() => renderUswdsTheme({ uswds: { bad: { nested: 1 } } })).toThrow(
      'Unable to compile tokens to Sass'
    );
  });
});
