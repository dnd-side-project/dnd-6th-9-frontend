import React from 'react';
import PropTypes from 'prop-types';
import { Tab, ToastMessage } from '@components/base';
import { PresentList } from '@components/domain';
import { StepTitle, TabWrapper, ToastStyle } from './style';

const MessageCreateStep2 = ({ labels, onClickPresent, errors }) => {
  return (
    <>
      <StepTitle>보낼 선물을 선택해주세요</StepTitle>
      <TabWrapper>
        <Tab labels={labels} />
      </TabWrapper>
      <PresentList onClickPresent={onClickPresent} />
      {errors.gift && (
        <ToastMessage
          message={errors.gift}
          duration={1000}
          css={ToastStyle}
        ></ToastMessage>
      )}
    </>
  );
};

export default MessageCreateStep2;

MessageCreateStep2.propTypes = {
  labels: PropTypes.array,
  onClickPresent: PropTypes.func,
  errors: PropTypes.object,
};
