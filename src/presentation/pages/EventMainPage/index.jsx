import React from 'react';
import { ReactComponent as PURPLE_LOGO } from '@assets/images/logo/logo_purple.svg';
import { MenuLayer } from '@components/domain';
import scrapIconOn from '@assets/icons/scrap_icon.svg';
import scrapIconOff from '@assets/icons/scrap_icon_off.svg';
import shareIcon from '@assets/icons/share_icon.svg';
import { COLOR } from '@styles';

import {
  Header,
  Icon,
  Button /*ToastMessage,*/,
} from /*Image,*/ '@components/base';
import { AnniversaryMainTheme } from '@components/domain';

import {
  EventMainContainer,
  PurpleLogoWrapper,
  MainTitle,
  BoldText,
  IconContainer,
  PopupMessage,
  PopupContent,
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
              fill={COLOR.GRAY_900}
            />
            {DUMMY_DATA.isScrap ? (
              <Icon src={scrapIconOn} fill={COLOR.GRAY_900} />
            ) : (
              <Icon src={scrapIconOff} fill={COLOR.GRAY_900} />
            )}
            <PopupMessage duration={2500}>
              <PopupContent className="title">
                기념일을 저장해보세요!
              </PopupContent>
              <PopupContent>이벤트가 끝난 뒤에도 볼 수 있어요</PopupContent>
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
