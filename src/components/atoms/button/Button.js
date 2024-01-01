import PropTypes from 'prop-types';

// Constants
import { VARIANTS as BUTTON_VARIANTS } from './button.constants';

// Helpers
import { getVariantStyles } from './button.helpers';

// Components
import Typography, {
  VARIANTS as TYPOGRAPHY_VARIANTS,
} from '@components/atoms/typography';

// Styles
import styles from './button.module.css';

function Button(props) {
  const { label, variant } = props;

  const variantClassName = getVariantStyles(variant);

  const className = `${styles.button} ${variantClassName}`;

  return (
    <button className={className}>
      <Typography variant={TYPOGRAPHY_VARIANTS.body1Bold}>{label}</Typography>
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.string,
};

Button.defaultProps = {
  label: '',
  variant: BUTTON_VARIANTS.PRIMARY,
};

export default Button;
