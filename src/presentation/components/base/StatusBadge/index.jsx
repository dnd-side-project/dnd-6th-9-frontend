import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Text } from './style';
const StatusBadge = ({ isProgress }) => {
  return (
    <Wrapper className={isProgress ? 'progress' : ''}>
      <Text>{isProgress ? '진행중' : '종료'}</Text>
    </Wrapper>
  );
};

export default StatusBadge;

StatusBadge.propTypes = {
  isProgress: PropTypes.bool,
};
