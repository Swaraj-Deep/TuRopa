// Constants
import { VARIANTS } from './button.constants';

// Styles
import styles from './button.module.css';

export const getVariantStyles = (variant) => {
  switch (variant) {
    case VARIANTS.PRIMARY:
      return styles.primary;
    case VARIANTS.SECONDARY:
      return styles.secondary;
    case VARIANTS.TERTIARY:
      return styles.tertiary;
  }
};
