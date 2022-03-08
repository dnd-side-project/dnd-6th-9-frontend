import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  NavLinkContainer,
  NavLinkWrapper,
  MarginWrapper,
  SpaceWrapper,
} from './style';

const Tab = ({ labels }) => {
  const [activeTab, setActiveTab] = useState(0);

  const onClickTab = (index) => {
    setActiveTab(index);
  };

  const depth = labels.length === 2 ? 'depth2' : 'depth3';

  return (
    <NavLinkContainer>
      <MarginWrapper className={depth}>
        {labels.map((label, index) => (
          <NavLinkWrapper
            key={index}
            className={depth + (index === activeTab ? ' activeTab' : '')}
            to={`?q=${label}`}
            onClick={() => onClickTab(index)}
          >
            {label}
          </NavLinkWrapper>
        ))}
      </MarginWrapper>
      {depth === 'depth3' ? <SpaceWrapper /> : null}
    </NavLinkContainer>
  );
};

export default Tab;

Tab.propTypes = {
  labels: PropTypes.array,
};
