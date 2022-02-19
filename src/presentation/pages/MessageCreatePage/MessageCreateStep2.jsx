import React from 'react';
import propTypes from 'prop-types';
import { Tab } from '@components/base';
import { PresentList } from '@components/domain';
import { StepTitle, TabWrapper } from './style';

const MessageCreateStep2 = ({ labels, onClickPresent }) => {
  return (
    <>
      <StepTitle>보낼 선물을 선택해주세요</StepTitle>
      <TabWrapper>
        <Tab labels={labels} />
      </TabWrapper>
      <PresentList onClickPresent={onClickPresent} />
    </>
  );
};

export default MessageCreateStep2;

MessageCreateStep2.propTypes = {
  labels: propTypes.array,
  onClickPresent: propTypes.func,
};
