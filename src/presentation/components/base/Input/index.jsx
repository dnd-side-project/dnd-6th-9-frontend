import React, { useState } from 'react';
import { textCheckByte } from '@utils/validateFunc';
import { RootInput, RootWrapper, CountText, ErrorIcon } from './style';
import PropTypes from 'prop-types';

const Input = ({
  width,
  onChange,
  placeholder,
  error,
  maxLength,
  ...props
}) => {
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const handleChange = (e) => {
    const { value } = e.target;
    // maxLength 없을 시 제한 없음.
    if (!maxLength) {
      setValue(value);
      onChange && onChange({ value });
      return;
    }
    const { isSuccess } = textCheckByte(value, maxLength);
    if (isSuccess) {
      setValue(value);
      onChange && onChange({ value });
    }
  };

  const handleFocus = (e) => {
    const { type } = e;
    type === 'focus' ? setIsFocus(true) : setIsFocus(false);
  };

  return (
    <RootWrapper value={value} isFocus={isFocus} error={error}>
      <RootInput
        width={width}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleFocus}
        className={error ? 'error' : ''}
        placeholder={placeholder}
        {...props}
      />
      {error && <ErrorIcon />}
      {maxLength && (
        <CountText>
          {value.length}/{maxLength}
        </CountText>
      )}
    </RootWrapper>
  );
};

export default Input;

Input.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  error: PropTypes.bool,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  width: '100%',
  height: 30,
  onChange: () => {},
  error: false,
  placeholder: '메세지를 입력해주세요.',
};
