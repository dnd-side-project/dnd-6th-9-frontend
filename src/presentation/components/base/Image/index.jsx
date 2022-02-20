import React from 'react';
import PropTypes from 'prop-types';
import { ImageContainer, ImageStyle } from './style';

const Image = ({ src, width, height, mode, ...rest }) => {
  return (
    <ImageContainer width={width} height={height}>
      <ImageStyle src={src} mode={mode} {...rest} />
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
