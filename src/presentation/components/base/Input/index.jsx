import React from 'react';
import InputRoot from './style';
import PropTypes from 'prop-types';

const Input = ({ width, onChange, placeholder, error, ...props }) => {
  return (
    <InputRoot
      width={width}
      onChange={onChange}
      className={error ? 'error' : ''}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;

Input.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  error: PropTypes.boolean,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  width: '100%',
  height: 30,
  onChange: () => {},
  error: false,
  placeholder: '메세지를 입력해주세요.',
};
