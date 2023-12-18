import PropTypes from 'prop-types';

// Helpers
import { getComponent } from './typography.helpers';

// Constants
import { COLORS, VARIANTS } from './typography.constants';

// Styles
import styles from './typography.module.css';

function Typography(props) {
  const { variant, color, className, children } = props;
  const Component = getComponent(variant);
  return (
    <Component className={`${styles[variant]} ${styles[color]} ${className}`}>
      {children}
    </Component>
  );
}

Typography.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};

Typography.defaultProps = {
  variant: VARIANTS.body2Light,
  color: COLORS.primary,
  className: '',
};

export default React.memo(Typography);
