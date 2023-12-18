import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

// Styles
import styles from './backdrop.module.css';

function Backdrop(props) {
  const { children, className } = props;
  return createPortal(
    <div
      className={`p-fixed flex items-center justify-center left-zero bottom-zero right-zero top-zero z-max ${styles.backdrop} ${className}`}
    >
      {children}
    </div>,
    document.getElementById('portal')
  );
}

Backdrop.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Backdrop.defaultProps = {
  children: null,
  className: '',
};

export default Backdrop;
