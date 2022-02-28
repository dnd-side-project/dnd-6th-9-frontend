import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@components/base';
import { PresentList } from '@components/domain';
import { StepTitle, TabWrapper } from './style';

const MessageUpdateStep2 = ({ formData, labels, onClickPresent }) => {
  return (
    <>
      <StepTitle>보낼 선물을 선택해주세요</StepTitle>
      <TabWrapper>
        <Tab labels={labels} />
      </TabWrapper>
      <PresentList formData={formData} onClickPresent={onClickPresent} />
    </>
  );
};

export default MessageUpdateStep2;

MessageUpdateStep2.propTypes = {
  formData: PropTypes.object,
  labels: PropTypes.array,
  onClickPresent: PropTypes.func,
};
