import React from 'react';
import { ReactComponent as PURPLE_LOGO } from '@assets/images/logo/logo_purple.svg';
import { MenuLayer } from '@components/domain';
import { ReactComponent as SCRAP_ICON_ON } from '@assets/icons/scrap_icon.svg';
import { ReactComponent as SCRAP_ICON_OFF } from '@assets/icons/scrap_icon_off.svg';
import popupMsg from '@assets/images/popupMsg.png';
import shareIcon from '@assets/icons/share_icon.svg';
import { COLOR } from '@styles';

import { Header, Icon, Button, Image } from '@components/base';
import { AnniversaryMainTheme } from '@components/domain';

import {
  EventMainContainer,
  PurpleLogoWrapper,
  MainTitle,
  BoldText,
  IconContainer,
  PopupMessage,
  ButtonWrapper,
  ButtonStyle,
} from './style';

const DUMMY_USER = {
  id: 1,
  email: 'dummy@example.com',
  nickname: '김민정',
  'login-count': 2,
};

const DUMMY_EVENT = {
  'event-id': 1,
  'user-id': 1,
  theme: 'school',
  'event-name': 'event name',
  'd-day-name': 'd-day-name',
  'event-description': 'event-description',
  'event-date': '2022-03-01',
  'created-date': '2022-02-20',
};
const DUMMY_DATA = [
  {
    title: '생일',
    targetDate: new Date().toLocaleDateString(),
    isProgress: true,
    isScrap: true,
    presentCount: 10,
  },
];

const EventMainPage = () => {
  const onClickButton = () => {};
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
      <EventMainContainer>
        <MainTitle>
          <BoldText>{DUMMY_USER['nickname']}</BoldText> 님의
          <br />
          <BoldText>{DUMMY_EVENT['event-name']}</BoldText> 까지
          <br />
          <BoldText className="purple">D-{1} </BoldText>
          <BoldText>남았어요!</BoldText>
          <IconContainer>
            <Icon
              src={shareIcon}
              height={24}
              width={24}
              fill={COLOR.GRAY_500}
            />
            {DUMMY_DATA.isScrap ? <SCRAP_ICON_ON /> : <SCRAP_ICON_OFF />}
            <PopupMessage>
              <Image width={153} height={49} src={popupMsg} />
            </PopupMessage>
          </IconContainer>
        </MainTitle>

        <AnniversaryMainTheme list={DUMMY_DATA} />
        <ButtonWrapper>
          <Button type={'primary'} style={ButtonStyle} onClick={onClickButton}>
            {DUMMY_EVENT['user-id'] === DUMMY_USER['id']
              ? '선물 확인하기'
              : '선물 보내기'}
          </Button>
        </ButtonWrapper>
      </EventMainContainer>
    </>
  );
};

export default EventMainPage;
