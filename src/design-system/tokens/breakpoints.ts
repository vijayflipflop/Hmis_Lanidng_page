/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1280px',
  wide: '1440px',
} as const;

export type BreakpointTokens = typeof breakpoints;
