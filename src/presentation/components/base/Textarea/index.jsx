import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  RootTextarea,
  ContentContainer,
  TextCounting,
  RootTextareaWrapper,
} from './style';
import { textCheckByte } from '@utils/validateFunc';

const Textarea = ({
  name,
  onChange,
  value,
  maxLength,
  placeholder,
  ...props
}) => {
  const currentLetterLength = value.length;
  const [isError, setIsError] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = (e) => {
    const { type } = e;
    type === 'focus' ? setIsFocus(true) : setIsFocus(false);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const { isSuccess, error } = textCheckByte(value, maxLength);
    if (error) {
      onChange && onChange({ error });
      setIsError(true);
    }
    if (isSuccess) {
      onChange && onChange({ text: value });
      setIsError(false);
    }
  };

  return (
    <RootTextareaWrapper isFocus={isFocus}>
      <RootTextarea
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleFocus}
        {...props}
      />
      <ContentContainer>
        <TextCounting className={isError ? 'error' : ''}>
          <strong>{currentLetterLength}</strong>/{maxLength}
        </TextCounting>
      </ContentContainer>
    </RootTextareaWrapper>
  );
};

export default Textarea;

Textarea.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
};

Textarea.defaultProps = {
  name: '',
  onChange: () => {},
  value: '',
  maxLength: 300,
  placeholder: '메세지를 입력하세요.',
};
