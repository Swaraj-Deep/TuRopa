import PropTypes from 'prop-types';

// Constants
import { EMPTY_OBJECT } from '@constants/defaults';

// Utils
import { getDiscountedPrice } from '@utils/price';

// Components
import Price from '@components/atoms/price';
import Discount from '@components/atoms/discount';

function ClothCardFooter(props) {
  const { cloth } = props;
  const { price, discountPercentage } = cloth;
  const discountedPrice = getDiscountedPrice(discountPercentage, price);
  return (
    <div className="flex gap-xxs items-baseline mt-sm">
      <Price price={discountedPrice} />
      <Price price={price} isOld />
      <Discount discountPercentage={discountPercentage} />
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
