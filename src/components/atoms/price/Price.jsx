import PropTypes from 'prop-types';

// Components
import Image from '@components/atoms/image';
import Typography, {
  VARIANTS as TYPOGRAPHY_VARIANTS,
  COLORS as TYPOGRAPHY_COLORS,
} from '@components/atoms/typography';

function Price(props) {
  const { isOld, price } = props;
  return (
    <Typography
      variant={isOld ? TYPOGRAPHY_VARIANTS.body2 : TYPOGRAPHY_VARIANTS.h6}
      color={isOld ? TYPOGRAPHY_COLORS.disabled : TYPOGRAPHY_COLORS.primary}
      className={`${isOld ? 'strike-through' : ''}`}
    >
      ₹{price}
    </Typography>
  );
}

Price.propTypes = {
  isOld: PropTypes.bool,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Price.defaultProps = {
  isOld: false,
  price: 0,
};

export default React.memo(Price);
