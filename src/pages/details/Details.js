import { useLocation } from 'react-router-dom';

// Helpers
import { makeMediaCarouselConfigs } from './details.helpers';

// Components
import MediaCarousel from '@components/organisms/mediaCarousel';

function Details() {
  const { state } = useLocation();
  const { cloth } = state || {};
  const { images } = cloth || {};
  // Need to check if cloth is there or we have to make an api call
  const mediaCarouselConfigs = makeMediaCarouselConfigs(images);
  return (
    <div>
      <MediaCarousel mediaCarouselConfigs={mediaCarouselConfigs} />
      Delivery options NExt section buuing option
      {cloth.id}
    </div>
  );
}

export default Details;
