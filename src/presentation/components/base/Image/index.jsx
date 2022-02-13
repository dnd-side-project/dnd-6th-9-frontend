import React from 'react';
import PropTypes from 'prop-types';
import { ImageWrapper, ImageContainer } from './style';
const Image = ({ src, width, height, mode, ...rest }) => {
  return (
    <ImageContainer>
      <ImageWrapper
        mode={mode}
        src={src}
        width={width}
        height={height}
        {...rest}
      ></ImageWrapper>
    </ImageContainer>
  );
};

export default Image;

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  mode: PropTypes.oneOf(['contain', 'cover', 'fill', 'none']),
};

Image.defaultProps = {
  src: '',
  width: 328,
  height: 246,
  mode: 'fill',
};