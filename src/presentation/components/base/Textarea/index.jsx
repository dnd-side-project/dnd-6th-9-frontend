import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RootTextarea, ContentContainer, TextCounting } from './style';
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
  const handleChange = (e) => {
    const { value } = e.target;
    const { isSuccess, error } = textCheckByte(value, maxLength);
    if (error) setIsError(true);
    if (isSuccess) {
      onChange && onChange({ text: value });
      setIsError(false);
    }
  };

  return (
    <div>
      <RootTextarea
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        {...props}
      />
      <ContentContainer>
        <TextCounting className={isError ? 'error' : ''}>
          {currentLetterLength}/{maxLength}
        </TextCounting>
      </ContentContainer>
    </div>
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
