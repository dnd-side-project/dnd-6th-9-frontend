import React from "react";
import PropTypes from "prop-types";

const Image = ({ src, alt, fallback, ...props }) => {
  const handleImgError = (e) => {
    e.target.src = fallback;
  };

  return <img src={src} alt={alt} onError={handleImgError} {...props} />;
};

export default Image;

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  fallback: PropTypes.string
};
