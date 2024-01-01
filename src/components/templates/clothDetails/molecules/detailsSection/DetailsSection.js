import PropTypes from 'prop-types';

// Constants
import { EMPTY_OBJECT } from '@constants/defaults';

// Components
import Rating, { SIZES as RATING_SIZES } from '@components/atoms/rating';
import PriceSection from './molecules/priceSection';
import BrandDescription from './molecules/brandDescription';
import LeadSection from './molecules/leadSection';

function DetailsSection(props) {
  const { cloth } = props;

  const { price, discountPercentage, brand, description, rating } = cloth;

  return (
    <div className="flex flex-col">
      <div>
        <BrandDescription brand={brand} description={description} />
        <Rating rating={rating} size={RATING_SIZES.LARGE} className="mt-sm" />
        <PriceSection price={price} discountPercentage={discountPercentage} />
      </div>
      <LeadSection />
    </div>
  );
}

DetailsSection.propTypes = {
  cloth: PropTypes.object,
};

DetailsSection.defaultProps = {
  cloth: EMPTY_OBJECT,
};

export default DetailsSection;
