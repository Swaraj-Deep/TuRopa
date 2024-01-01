// Constants
import {
  VARIANTS as TYPOGRAPHY_VARIANTS,
  COLORS as TYPOGRAPHY_COLORS,
} from '@components/atoms/typography';
import { SIZES } from './price.constants';

export const getTypographyVariant = (isOld, size) => {
  if (isOld) {
    if (size === SIZES.SMALL) return TYPOGRAPHY_VARIANTS.body2;
    if (size === SIZES.MEDIUM) return TYPOGRAPHY_VARIANTS.body1;
    if (size === SIZES.LARGE) return TYPOGRAPHY_VARIANTS.h4Light;
  }
  if (size === SIZES.SMALL) return TYPOGRAPHY_VARIANTS.h6;
  if (size === SIZES.MEDIUM) return TYPOGRAPHY_VARIANTS.h4;
  if (size === SIZES.LARGE) return TYPOGRAPHY_VARIANTS.h3;
};

export const getTypographyColor = (isOld) => {
  return isOld ? TYPOGRAPHY_COLORS.disabled : TYPOGRAPHY_COLORS.primary;
};
