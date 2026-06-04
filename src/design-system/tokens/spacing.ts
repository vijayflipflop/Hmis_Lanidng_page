/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '40px',
  '3xl': '48px',
  '4xl': '64px',
  '5xl': '80px',
} as const;

export type SpacingTokens = typeof spacing;
