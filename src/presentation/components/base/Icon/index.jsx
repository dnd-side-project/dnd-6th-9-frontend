import React from "react";
import PropTypes from "prop-types";
import { IconContainer } from "./style";
import { COLOR } from '@styles';

const Icon = ({ src, height, width, fill }) => {
  return <IconContainer src={src} height={height} width={width} fill={fill} />;
};

Icon.propTypes = {
  src: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  fill: PropTypes.string
};

export default Icon;

Icon.defaultProps = {
    src: '',
    height: 24,
    width: 24,
    fill: COLOR.GRAY_900,
  };