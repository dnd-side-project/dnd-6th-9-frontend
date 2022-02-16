import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper } from './style.js';

const Button = ({ children, type, size, disabled, ...rest }) => {
  const buttonClassName = `${type} ${size}`;

  return (
    <ButtonWrapper className={buttonClassName} disabled={disabled} {...rest}>
      {children}
    </ButtonWrapper>
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
  size: 'm',
  disabled: false,
};
