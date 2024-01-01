import PropTypes from 'prop-types';

// Utils
import { getDiscountedPrice } from '@utils/price';

// Components
import Price, { SIZES as PRICE_SIZES } from '@components/atoms/price';
import Discount, { SIZES as DISCOUNT_SIZES } from '@components/atoms/discount';

// Styles
import styles from './priceSection.module.css';

function PriceSection(props) {
  const { price, discountPercentage } = props;

  const discountedPrice = getDiscountedPrice(discountPercentage, price);

  return (
    <div className="flex items-baseline gap-sm mt-xs">
      <Price price={discountedPrice} size={PRICE_SIZES.LARGE} />
      <Price
        price={price}
        size={PRICE_SIZES.LARGE}
        className={styles.oldPrice}
        isOld
      />
      <Discount
        discountPercentage={discountPercentage}
        size={DISCOUNT_SIZES.LARGE}
      />
    </div>
  );
}

PriceSection.propTypes = {
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  discountPercentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PriceSection.defaultProps = {
  price: '0',
  discountPercentage: '0',
};

export default PriceSection;
