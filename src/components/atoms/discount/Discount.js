import PropTypes from 'prop-types';

// Constants
import { SIZES } from './discount.constants';

// Helpers
import { getTypographyVariant } from './discount.helpers';

// Components
import Typography, {
  COLORS as TYPOGRAPHY_COLORS,
} from '@components/atoms/typography';

function Discount(props) {
  const { discountPercentage, size } = props;

  const typographyVariant = getTypographyVariant(size);

  return (
    <Typography variant={typographyVariant} color={TYPOGRAPHY_COLORS.success}>
      {discountPercentage}% Off
    </Typography>
  );
}

Discount.propTypes = {
  discountPercentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.string,
};

Discount.defaultProps = {
  discountPercentage: '0',
  size: SIZES.SMALL,
};

export default Discount;
