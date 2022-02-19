import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper } from './style.js';

const Button = ({ children, type, disabled, ...rest }) => {
  return (
    <ButtonWrapper className={`${type}`} disabled={disabled} {...rest}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  children: null,
  type: 'primary',
  disabled: false,
};
