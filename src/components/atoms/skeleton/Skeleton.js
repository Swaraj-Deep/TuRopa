import PropTypes from 'prop-types';

// Styles
import styles from './skeleton.module.css';

function Skeleton(props) {
  const { className } = props;
  return <div className={`${styles.skeleton} ${className}`}></div>;
}

Skeleton.propTypes = {
  className: PropTypes.string,
};

Skeleton.defaultProps = {
  className: '',
};

export default Skeleton;
