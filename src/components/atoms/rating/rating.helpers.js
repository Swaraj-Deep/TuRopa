// Constants
import { SIZES } from './rating.constants';
import { VARIANTS as TYPOGRAPHY_VARIANTS } from '@components/atoms/typography';

export const getTypographyVariant = (size) =>
  size === SIZES.LARGE
    ? TYPOGRAPHY_VARIANTS.body1
    : size === SIZES.MEDIUM
      ? TYPOGRAPHY_VARIANTS.body2
      : TYPOGRAPHY_VARIANTS.caption;
