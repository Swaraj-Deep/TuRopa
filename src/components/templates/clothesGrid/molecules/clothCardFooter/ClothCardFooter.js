import PropTypes from 'prop-types';

// Constants
import { EMPTY_OBJECT } from '@constants/defaults';

// Components
import Typography, {
  VARIANTS as TYPOGRAPHY_VARIANTS,
  COLORS as TYPOGRAPHY_COLORS,
} from '@components/atoms/typography';
import Price from '@components/atoms/price';

function ClothCardFooter(props) {
  const { cloth } = props;
  const { price, discountPercentage } = cloth;
  const discount = (discountPercentage / 100) * price;
  const discountedPrice =
    Math.round((price - discount + Number.EPSILON) * 100) / 100;
  return (
    <div className="flex gap-xxs items-baseline mt-sm">
      <Price price={discountedPrice} />
      <Price price={price} isOld />
      <Typography
        variant={TYPOGRAPHY_VARIANTS.caption}
        color={TYPOGRAPHY_COLORS.success}
      >
        {discountPercentage}% Off
      </Typography>
    </div>
  );
}

ClothCardFooter.propTypes = {
  cloth: PropTypes.object,
};

ClothCardFooter.defaultProps = {
  cloth: EMPTY_OBJECT,
};

export default React.memo(ClothCardFooter);
