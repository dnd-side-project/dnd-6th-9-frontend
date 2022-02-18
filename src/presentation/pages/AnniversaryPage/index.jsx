import React from 'react';
import { ReactComponent as PURPLE_LOGO } from '@assets/images/logo/logo_purple.svg';
import { ContentWrapper, PurpleLogoWrapper } from './style';
import { Header } from '@components/base';
import { MenuLayer } from '@components/domain';

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
      <ContentWrapper></ContentWrapper>
    </>
  );
};

export default AnnivervsaryPage;
