import { useMemo } from 'react';
import PropTypes from 'prop-types';

// Constants
import { EMPTY_OBJECT } from '@constants/defaults';

// Helpers
import { makeMediaCarouselConfigs } from './clothDetails.helpers';

// Hooks
import useClothDetails from './hooks/useClothDetails';

// Components
import MediaCarousel from '@components/organisms/mediaCarousel';
import ClothDetailsShimmer from './molecules/clothDetailsShimmer';
import DetailsSection from './molecules/detailsSection';

function ClothDetails(props) {
  const { cloth } = props;
  const { isLoading, clothDetails } = useClothDetails(cloth);

  const { images } = clothDetails;

  console.log(clothDetails);

  const mediaCarouselConfigs = useMemo(
    () => makeMediaCarouselConfigs(images),
    [images]
  );

  if (isLoading) {
    return <ClothDetailsShimmer />;
  }

  return (
    <div className="flex gap-lg">
      <MediaCarousel mediaCarouselConfigs={mediaCarouselConfigs} />
      <DetailsSection cloth={clothDetails} />
    </div>
  );
}

ClothDetails.propTypes = {
  cloth: PropTypes.object,
};

ClothDetails.defaultProps = {
  cloth: EMPTY_OBJECT,
};

export default ClothDetails;
