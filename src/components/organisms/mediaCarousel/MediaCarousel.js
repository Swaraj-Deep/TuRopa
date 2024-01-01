import PropTypes from 'prop-types';

// Constants
import { EMPTY_ARRAY } from '@constants/defaults';

// Components
import Image from '@components/atoms/image';
import CarouselIndicators from './atoms/carouselIndicators';

// Hooks
import useMediaCarousel from './hooks/useMediaCarousel';

// Styles
import styles from './mediaCarousel.module.css';

const renderMedia = (selectedImageIndex) => (mediaCarouselConfig, index) => {
  return (
    <Image
      className={`p-relative ${
        selectedImageIndex === index
          ? `visible ${styles.activeImageContainer}`
          : 'hidden'
      }`}
      imageClassName={`p-absolute m-auto top-zero bottom-zero left-zero right-zero ${styles.image}`}
      src={mediaCarouselConfig.getUrl()}
      key={mediaCarouselConfig.getId()}
      alt="Carousel"
    />
  );
};

function MediaCarousel(props) {
  const { mediaCarouselConfigs } = props;

  const maxMediaLength = mediaCarouselConfigs.length;

  const { selectedImageIndex, handleSelctedImageClick } =
    useMediaCarousel(maxMediaLength);

  return (
    <div className={styles.mediaCarousel}>
      <div className={styles.carouselContainer}>
        {mediaCarouselConfigs.map(renderMedia(selectedImageIndex))}
      </div>
      <CarouselIndicators
        indicatorsCount={maxMediaLength}
        selectedIndicator={selectedImageIndex}
        onIndicatorClick={handleSelctedImageClick}
      />
    </div>
  );
}

MediaCarousel.propTypes = {
  mediaCarouselConfigs: PropTypes.array,
};

MediaCarousel.defaultProps = {
  mediaCarouselConfigs: EMPTY_ARRAY,
};

export default MediaCarousel;
