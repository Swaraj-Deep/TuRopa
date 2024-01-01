import PropTypes from 'prop-types';

// Components
import Typography, {
  VARIANTS as TYPOGRAPHY_VARIANTS,
} from '@components/atoms/typography';

function BrandDescription(props) {
  const { brand, description } = props;

  return (
    <>
      <Typography variant={TYPOGRAPHY_VARIANTS.h2}>{brand}</Typography>
      <Typography variant={TYPOGRAPHY_VARIANTS.h5Light} className="mt-xs">
        {description}
      </Typography>
    </>
  );
}

BrandDescription.propTypes = {
  brand: PropTypes.string,
  description: PropTypes.string,
};

BrandDescription.defaultProps = {
  brand: '',
  description: '',
};

export default BrandDescription;
