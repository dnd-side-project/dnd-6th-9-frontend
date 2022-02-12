import React from "react";
import PropTypes from "prop-types";

const Image = ({ src, alt, width, height, mode }) => {
  return (
      <div className="imageWrapper">
        <ImageWrapper
        mode={mode}
        src={src}
        alt={alt}
        width={width}
        height={height}
        ></ImageWrapper>
    </div>
  );
};

export default Image;

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  mode: PropTypes.oneOf(["contain", "cover", "fill", "none"])
};
