import React from 'react';
import PropTypes from 'prop-types';
import arrow_left from '@assets/icons/arrow_left.svg';
import { Header, Icon } from '@components/base';
import { BackButtonContainer, TextWrapper } from './style';

const DefaultPageHeader = ({ handleGoBack, centerContent, rightContent }) => {
  return (
    <Header
      leftContent={
        <BackButtonContainer onClick={handleGoBack}>
          <Icon src={arrow_left} width={24} height={24} />
          <TextWrapper>뒤로</TextWrapper>
        </BackButtonContainer>
      }
      centerContent={centerContent}
      rightContent={rightContent}
    />
  );
};

export default DefaultPageHeader;

DefaultPageHeader.propTypes = {
  handleGoBack: PropTypes.func,
  centerContent: PropTypes.node,
  rightContent: PropTypes.node,
};
