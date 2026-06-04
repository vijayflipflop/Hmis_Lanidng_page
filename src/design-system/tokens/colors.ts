/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const colors = {
  white: '#ffffffff',
  black: '#191c1fff',
  gray: {
    50: '#f8f9faff',
    100: '#f7f6f3ff',
    200: '#e9ecefff',
    300: '#dee2e6ff',
    400: '#ced4daff',
    500: '#969da4ff',
    600: '#6c757dff',
    700: '#495057ff',
    800: '#343a40ff',
    900: '#212529ff',
  },
  blue: {
    50: '#eff6ffff',
    100: '#eaf2ffff',
    200: '#c9ddffff',
    300: '#94beffff',
    400: '#5f98f3ff',
    500: '#2271e8ff',
    600: '#1a5cbcff',
    700: '#14488fff',
    800: '#103260ff',
    900: '#0b1c30ff',
  },
} as const;

export type ColorTokens = typeof colors;
