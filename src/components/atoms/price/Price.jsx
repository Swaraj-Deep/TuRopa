import PropTypes from 'prop-types';

// Constants
import { SIZES } from './price.constants';

// Helpers
import { getTypographyColor, getTypographyVariant } from './price.helpers';

// Components
import Typography from '@components/atoms/typography';

function Price(props) {
  const { isOld, price, size, className } = props;

  const typographyClassName = isOld ? `strike-through ${className}` : className;
  const typographyVariant = getTypographyVariant(isOld, size);
  const typographyColor = getTypographyColor(isOld);

  return (
    <Typography
      variant={typographyVariant}
      color={typographyColor}
      className={typographyClassName}
    >
      ₹{price}
    </Typography>
  );
}

Price.propTypes = {
  isOld: PropTypes.bool,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.string,
  className: PropTypes.string,
};

Price.defaultProps = {
  isOld: false,
  price: 0,
  size: SIZES.SMALL,
  className: '',
};

export default React.memo(Price);
