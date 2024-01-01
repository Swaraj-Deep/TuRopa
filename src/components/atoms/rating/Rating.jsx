import PropTypes from 'prop-types';

// Constants
import ICONS from '@constants/icons';
import { SIZES } from './rating.constants';

// Helpers
import { getTypographyVariant } from './rating.helpers';

// Components
import Typography from '@components/atoms/typography';
import Image from '@components/atoms/image';

function Rating(props) {
  const { rating, size, className } = props;
  const typographyVariant = getTypographyVariant(size);

  return (
    <div className={`flex items-baseline gap-xxs ${className}`}>
      <Typography variant={typographyVariant}>{rating}</Typography>
      <Image src={ICONS.STAR_SOLID} />
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.string,
  className: PropTypes.string,
};

Rating.defaultProps = {
  rating: '0',
  size: SIZES.SMALL,
  className: '',
};

export default React.memo(Rating);
