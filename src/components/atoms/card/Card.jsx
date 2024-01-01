import PropTypes from 'prop-types';

// Constants
import { EMPTY_FUNCTION } from '@constants/defaults';

// Components
import Image from '@components/atoms/image';

// Styles
import styles from './card.module.css';

function Card(props) {
  const {
    imageUrl,
    renderBody,
    renderFooter,
    mediaClassName,
    className,
    onClick,
  } = props;
  return (
    <div
      className={`cursor-pointer ${styles.card} ${className}`}
      onClick={onClick}
      tabIndex={0}
      role="button"
    >
      <Image
        src={imageUrl}
        className={`p-relative ${styles.imageContainer}`}
        imageClassName={`p-absolute m-auto top-zero bottom-zero left-zero right-zero ${styles.image} ${mediaClassName}`}
        fetchpriority="high"
      />
      <div className={styles.cardContent}>
        {renderBody()}
        {renderFooter()}
      </div>
    </div>
  );
}

Card.propTypes = {
  imageUrl: PropTypes.string,
  renderBody: PropTypes.func,
  renderFooter: PropTypes.func,
  className: PropTypes.string,
  mediaClassName: PropTypes.string,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  imageUrl: undefined,
  renderBody: EMPTY_FUNCTION,
  renderFooter: EMPTY_FUNCTION,
  className: '',
  mediaClassName: '',
  onClick: EMPTY_FUNCTION,
};

export default React.memo(Card);
