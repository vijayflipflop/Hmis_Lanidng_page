/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { colors } from './tokens/colors';
import { typography } from './tokens/typography';
import { spacing } from './tokens/spacing';
import { radius } from './tokens/radius';
import { shadows } from './tokens/shadows';
import { breakpoints } from './tokens/breakpoints';
import { motion } from './tokens/motion';

export const designSystem = {
  colors,
  typography,
  spacing,
  radius,
  shadows,
  breakpoints,
  motion,
} as const;

export type { ColorTokens } from './tokens/colors';
export type { TypographyTokens } from './tokens/typography';
export type { SpacingTokens } from './tokens/spacing';
export type { RadiusTokens } from './tokens/radius';
export type { ShadowTokens } from './tokens/shadows';
export type { BreakpointTokens } from './tokens/breakpoints';
export type { MotionTokens } from './tokens/motion';
