import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './style';

const ToastMessage = ({ children, duration, ...props }) => {
  const [isActive, setIsActive] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsActive(false);
      //clearTimeout(setExistTimeout);
    }, duration ?? 1000);
  });

  return (
    <>
      {
        <Wrapper show={isActive} {...props}>
          {children}
        </Wrapper>
      }
    </>
  );
};

export default ToastMessage;

ToastMessage.propTypes = {
  children: null,
  duration: PropTypes.number,
};
