import { useCallback } from 'react';
import PropTypes from 'prop-types';

// Constants
import { EMPTY_FUNCTION } from '@constants/defaults';

// Styles
import styles from './carouselIndicator.module.css';

function CarouselIndicator(props) {
  const { onIndicatorClick, currentIndicator, selectedIndicator } = props;

  const isActive = currentIndicator === selectedIndicator;

  const handleIndicatorClick = useCallback(
    () => onIndicatorClick(currentIndicator),
    [currentIndicator, onIndicatorClick]
  );
  return (
    <div className="cursor-pointer py-xs" onClick={handleIndicatorClick}>
      <div
        className={`${styles.indicator} ${
          isActive ? styles.activeIndicator : ''
        }`}
      />
    </div>
  );
}

CarouselIndicator.propTypes = {
  onIndicatorClick: PropTypes.func,
  currentIndicator: PropTypes.number,
  selectedIndicator: PropTypes.number,
};

CarouselIndicator.defaultProps = {
  onIndicatorClick: EMPTY_FUNCTION,
  currentIndicator: 0,
  selectedIndicator: 0,
};

export default React.memo(CarouselIndicator);
