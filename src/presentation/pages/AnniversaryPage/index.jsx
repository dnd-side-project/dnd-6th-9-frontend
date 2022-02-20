import React from 'react';
import { ReactComponent as PURPLE_LOGO } from '@assets/images/logo/logo_purple.svg';
import { ContentWrapper, PurpleLogoWrapper } from './style';
import { Header } from '@components/base';
import { MenuLayer, AnniversaryTheme } from '@components/domain';

const AnnivervsaryPage = () => {
  const HeaderContent = {
    leftContent: (
      <PurpleLogoWrapper>
        <PURPLE_LOGO />
      </PurpleLogoWrapper>
    ),
    rightContent: <MenuLayer />,
  };
  return (
    <>
      <Header {...HeaderContent} />
      <ContentWrapper>
        <AnniversaryTheme title={'나의 기념일'} />
        <AnniversaryTheme title={'스크랩한 기념일'} />
      </ContentWrapper>
    </>
  );
};

export default AnnivervsaryPage;
