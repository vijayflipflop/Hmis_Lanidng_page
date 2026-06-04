/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const typography = {
  display: {
    fontFamily: 'Instrument Serif, serif',
    fontSize: '72px',
    lineHeight: '86.4px',
    fontWeight: '400',
  },
  h1: {
    fontFamily: 'Instrument Serif, serif',
    fontSize: '60px',
    lineHeight: '72px',
    fontWeight: '400',
  },
  h2: {
    fontFamily: 'Instrument Serif, serif',
    fontSize: '56px',
    lineHeight: '67.2px',
    fontWeight: '400',
  },
  h3: {
    fontFamily: 'Instrument Serif, serif',
    fontSize: '48px',
    lineHeight: '57.6px',
    fontWeight: '400',
  },
  h4: {
    fontFamily: 'Instrument Serif, serif',
    fontSize: '32px',
    lineHeight: '38.4px',
    fontWeight: '400',
  },
  h5: {
    fontFamily: 'Instrument Serif, serif',
    fontSize: '24px',
    lineHeight: '28.8px',
    fontWeight: '400',
  },
  h6: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '20px',
    lineHeight: '24px',
    fontWeight: '500',
  },
  bodyLarge: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '20px',
    lineHeight: '24px',
    fontWeight: '400',
  },
  bodyMedium: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '18px',
    lineHeight: '21.6px',
    fontWeight: '400',
  },
  bodySmall: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '16px',
    lineHeight: '19.2px',
    fontWeight: '400',
  },
  caption: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    lineHeight: '16.8px',
    fontWeight: '400',
  },
  label: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    lineHeight: '16.8px',
    fontWeight: '500',
  },
  buttonText: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '16px',
    lineHeight: '19.2px',
    fontWeight: '500',
  }
} as const;

export type TypographyTokens = typeof typography;
