import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './style';

const ToastMessage = ({ message, duration, ...props }) => {
  const [isActive, setIsActive] = useState(true);
  const setExistTimeout = useEffect(() => {
    setTimeout(() => {
      setIsActive(false);
      clearTimeout(setExistTimeout);
    }, duration ?? 1000);
  });

  return (
    <>
      {
        <Wrapper show={isActive} {...props}>
          {message}
        </Wrapper>
      }
    </>
  );
};

export default ToastMessage;

ToastMessage.propTypes = {
  message: PropTypes.string,
  duration: PropTypes.number,
};
