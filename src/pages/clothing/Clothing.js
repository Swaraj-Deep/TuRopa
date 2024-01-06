import { useLocation } from 'react-router-dom';

// Helpers
import { makeMediaCarouselConfigs } from './clothing.helpers';

// Components
import MediaCarousel from '@components/organisms/mediaCarousel';

function Clothing() {
  const { state } = useLocation();
  const { cloth } = state || {};
  const { images } = cloth || {};
  // Need to check if cloth is there or we have to make an api call
  const mediaCarouselConfigs = makeMediaCarouselConfigs(images);
  return (
    <div>
      <MediaCarousel mediaCarouselConfigs={mediaCarouselConfigs} />
      {cloth.id}
    </div>
  );
}

export default Clothing;
