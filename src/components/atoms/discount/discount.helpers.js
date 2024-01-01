// Constants
import { VARIANTS as TYPOGRAPHY_VARIANTS } from '@components/atoms/typography';
import { SIZES } from './discount.constants';

export const getTypographyVariant = (size) => {
  if (size === SIZES.SMALL) return TYPOGRAPHY_VARIANTS.caption;
  if (size === SIZES.MEDIUM) return TYPOGRAPHY_VARIANTS.body2Light;
  if (size === SIZES.LARGE) return TYPOGRAPHY_VARIANTS.h5Light;
};
