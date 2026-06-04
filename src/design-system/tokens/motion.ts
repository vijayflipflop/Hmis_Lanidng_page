/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const motion = {
  duration: {
    fast: 0.15,
    medium: 0.3,
    slow: 0.5,
    deluxe: 0.8,
  },
  easing: {
    easeIn: [0.4, 0, 1, 1],
    easeOut: [0, 0, 0.2, 1],
    easeInOut: [0.4, 0, 0.2, 1],
    standard: [0.25, 0.1, 0.25, 1],
    springy: [0.43, 0.13, 0.23, 0.96],
  },
  presets: {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    slideUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
    },
    slideDown: {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
    },
    scaleUp: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
    },
  },
} as const;

export type MotionTokens = typeof motion;
