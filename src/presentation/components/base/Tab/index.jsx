import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  TabContainer,
  Tabs,
  TabWrapper,
  Indicator,
  ListWrapper,
  EventWrapper,
  IndicatorWrapper,
} from './styles';

const Tab = ({ list, column }) => {
  const [activeTab, setActiveTab] = useState(0);

  const onClickHandle = (index) => {
    setActiveTab(index);
  };

  return (
    <TabContainer>
      <Tabs>
        {Object.keys(list).map((title, idx) => {
          return (
            <TabWrapper
              key={idx}
              onClick={() => {
                onClickHandle(idx);
              }}
              column={column}
            >
              {title}
            </TabWrapper>
          );
        })}
      </Tabs>

      <IndicatorWrapper>
        <Indicator active={activeTab} column={column} />
      </IndicatorWrapper>

      <ListWrapper>
        {Object.values(list)[activeTab].map((event, idx) => {
          return (
            <EventWrapper key={idx} column={column}>
              {event}
            </EventWrapper>
          );
        })}
      </ListWrapper>
    </TabContainer>
  );
};

export default Tab;

Tab.propTypes = {
  list: PropTypes.object,
  column: PropTypes.number,
};
