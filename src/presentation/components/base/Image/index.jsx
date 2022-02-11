import React from "react";
import PropTypes from "prop-types";

const Image = ({ src, alt, fallback, ...props }) => {
  return <img src={src} alt={alt} onerror={`this.src='${fallback}';`} {...props} />;
};

export default Image;

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  fallback: PropTypes.string,
};