import PropTypes from 'prop-types';

function Image(props) {
  const { src, className, alt, imageClassName, fetchpriority } = props;
  return (
    <div className={className}>
      <img
        src={src}
        alt={alt}
        className={imageClassName}
        fetchpriority={fetchpriority}
        aria-hidden={true}
      />
    </div>
  );
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  imageClassName: PropTypes.string,
  fetchpriority: PropTypes.string,
};

Image.defaultProps = {
  src: undefined,
  alt: 'Failed to load image',
  className: '',
  imageClassName: '',
  fetchpriority: 'low',
};

export default React.memo(Image);
