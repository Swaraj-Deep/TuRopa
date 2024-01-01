import PropTypes from 'prop-types';

// Constants
import { EMPTY_FUNCTION } from '@constants/defaults';

// Utils
import _times from '@utils/times';

// Components
import CarouselIndicator from './atoms/carouselIndicator';

const renderIndicator =
  (selectedIndicator, onIndicatorClick) => (currentIndicator) => {
    return (
      <CarouselIndicator
        selectedIndicator={selectedIndicator}
        onIndicatorClick={onIndicatorClick}
        currentIndicator={currentIndicator}
        key={`indicator-${currentIndicator}`}
      />
    );
  };

function CarouselIndicators(props) {
  const { indicatorsCount, selectedIndicator, onIndicatorClick } = props;

  return (
    <div className="flex items-center justify-center gap-xxs mt-xs">
      {_times(
        indicatorsCount,
        renderIndicator(selectedIndicator, onIndicatorClick)
      )}
    </div>
  );
}

CarouselIndicators.propTypes = {
  indicatorsCount: PropTypes.number,
  selectedIndicator: PropTypes.number,
  onIndicatorClick: PropTypes.func,
};

CarouselIndicators.defaultProps = {
  indicatorsCount: 0,
  selectedIndicator: 0,
  onIndicatorClick: EMPTY_FUNCTION,
};

export default React.memo(CarouselIndicators);
