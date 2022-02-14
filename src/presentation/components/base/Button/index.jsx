import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer } from './style.js';

const Button = ({ children, type, size, disabled, ...rest }) => {
  return (
    <ButtonContainer type={type} size={size} disabled={disabled} {...rest}>
      {children}
    </ButtonContainer>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  children: null,
  type: 'primary',
  size: 'M',
  disabled: false,
};
