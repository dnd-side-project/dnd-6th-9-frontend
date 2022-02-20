import React from 'react';
import PropTypes from 'prop-types';
import ImageContainer from './style';

const Image = ({ src, width, height, mode, ...rest }) => {
  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: mode,
    objectPosition: '50% 50%',
  };

  return (
    <ImageContainer width={width} height={height}>
      <img src={src} style={imageStyle} {...rest} />
    </ImageContainer>
  );
};

export default Image;

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mode: PropTypes.oneOf(['contain', 'cover', 'fill', 'none']),
};

Image.defaultProps = {
  src: '',
  mode: 'fill',
};
