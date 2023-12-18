import PropTypes from 'prop-types';

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
      <Image src="/icons/star-solid.svg" />
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
