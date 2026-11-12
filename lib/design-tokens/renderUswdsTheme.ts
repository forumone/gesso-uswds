import { NaniError } from 'nani';

import { isRecord } from '../utils/isRecord.ts';
import {
  cleanValue,
  isColorSyntax,
  isCssVar,
  isNumberLike,
} from './cleanValue.ts';
import { SassValue } from './SassValue.ts';
import { toError } from './toError.ts';
import { UswdsValue } from './UswdsValue.ts';
import type { GessoObject } from './types.ts';

/**
 * Formats a single USWDS setting value for output as a Sass value.
 */
export function formatUswdsValue(value: unknown): string {
  if (typeof value === 'string') {
    if (isCssVar(value) || isColorSyntax(value) || isNumberLike(value)) {
      return value;
    }
    return value.includes("'") ? `"${value}"` : `'${value}'`;
  }
  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value);
  }
  if (value === null || value === undefined) {
    return 'null';
  }
  if (value instanceof SassValue) {
    return String(value.sass);
  }
  if (value instanceof UswdsValue) {
    return value.toSass();
  }
  return String(cleanValue(value));
}

/**
 * Create the `@forward 'uswds-core' with (...)` rule that configures USWDS's
 * `$theme-*` settings.
 */
export function createSassVariables(data: GessoObject): string {
  // An empty `with ()` clause is a Sass syntax error.
  if (Object.keys(data).length === 0) {
    return "@forward 'uswds-core';\n";
  }

  let output = "@forward 'uswds-core' with (\n";
  Object.entries(data).forEach(([key, value]) => {
    output += ` $theme-${key}: ${formatUswdsValue(value)},\n`;
  });
  output += ');\n';
  return output;
}

/**
 * Render the USWDS Sass config variables.
 */
export function renderUswdsTheme(data: { uswds?: GessoObject }): string {
  if (!isRecord(data)) {
    throw new NaniError({
      shortMessage: `Expecting non-array object for rendering sass; got ${data === null ? 'null' : typeof data}`,
    });
  }

  try {
    return createSassVariables(data.uswds ?? {});
  } catch (error) {
    throw new NaniError({
      shortMessage: 'Unable to compile tokens to Sass',
      cause: toError(error),
    });
  }
}
