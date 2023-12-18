import PropTypes from 'prop-types';

// Constants
import { EMPTY_OBJECT } from '@constants/defaults';

// Components
import Typography, {
  VARIANTS as TYPOGRAPHY_VARIANTS,
} from '@components/atoms/typography';
import Rating from '@components/atoms/rating';

function ClothCardBody(props) {
  const { cloth } = props;
  const { brand, description, rating } = cloth;
  return (
    <div>
      <Rating rating={rating} />
      <Typography variant={TYPOGRAPHY_VARIANTS.body1} className="mt-xs">
        {brand}
      </Typography>
      <Typography
        variant={TYPOGRAPHY_VARIANTS.body2Light}
        className="ellipsis mt-xxs"
      >
        {description}
      </Typography>
    </div>
  );
}

ClothCardBody.propTypes = {
  cloth: PropTypes.object,
};

ClothCardBody.defaultProps = {
  cloth: EMPTY_OBJECT,
};

export default React.memo(ClothCardBody);
