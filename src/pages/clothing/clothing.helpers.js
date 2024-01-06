// Builders
import { MediaCarouselConfig } from '@components/organisms/mediaCarousel';

// Constants
import { EMPTY_ARRAY } from '@constants/defaults';

export function makeMediaCarouselConfigs(images = EMPTY_ARRAY) {
  return images.map((image, index) =>
    new MediaCarouselConfig().setId(`media-key-${index}`).setUrl(image)
  );
}
