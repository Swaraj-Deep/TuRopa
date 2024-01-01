import PropTypes from 'prop-types';

// Constants
import ICONS from '@constants/icons';

// Components
import Typography, {
  VARIANTS as TYPOGRAPHY_VARIANTS,
} from '@components/atoms/typography';
import Image from '@components/atoms/image';

function Rating(props) {
  const { rating } = props;
  return (
    <div className="flex items-baseline gap-xxs">
      <Typography variant={TYPOGRAPHY_VARIANTS.caption}>{rating}</Typography>
      <Image src={ICONS.STAR_SOLID} />
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Rating.defaultProps = {
  rating: '0',
};

export default React.memo(Rating);
