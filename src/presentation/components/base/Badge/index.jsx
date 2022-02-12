import React from 'react';
import PropTypes from 'prop-types';
import { BadgeContainer, Super } from './style';

const Badge = ({ children, count, maxCount, showZero, dot, ...props }) => {
  let badge = null;

  if (count) {
    badge = (
      <Super>{maxCount && count > maxCount ? `${maxCount}+` : count}</Super>
    );
  } else {
    if (count !== null) {
      badge = showZero ? <Super>0</Super> : null;
    } else if (dot) {
      badge = <Super className="dot" />;
    }
  }

  return (
    <BadgeContainer {...props}>
      {children}
      {badge}
    </BadgeContainer>
  );
};

export default Badge;

Badge.propTypes = {
  children: PropTypes.node,
  count: PropTypes.number,
  maxCount: PropTypes.number,
  showZero: PropTypes.bool,
  dot: PropTypes.bool,
};

Badge.defaultProps = {
  children: null,
  count: null,
  maxCount: null,
  showZero: false,
  dot: false,
};
