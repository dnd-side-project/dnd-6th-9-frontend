import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Text } from './style';
const StatusBadge = ({ children, isProgress }) => {
  return (
    <Wrapper className={isProgress ? 'progress' : ''}>
      {children ? children : <Text>{isProgress ? '진행중' : '종료'}</Text>}
    </Wrapper>
  );
};

export default StatusBadge;

StatusBadge.propTypes = {
  children: PropTypes.node,
  isProgress: PropTypes.bool,
};
