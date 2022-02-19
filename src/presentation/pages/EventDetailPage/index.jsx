import React from 'react';
import { Background, MainBoard, MainText, IconContainer } from './style';
import grats from '@assets/logos/grats.svg';
import hamburger from '@assets/icons/hamburger.svg';
import share from '@assets/icons/share.svg';
import bookmark from '@assets/icons/bookmark.svg';
import { Header, Image, Icon } from '@components/base';
import { EventImage } from '@components/domain';

const EventDetailPage = () => {
  return (
    <>
      <Background>
        <Header
          leftContent={
            <Image src={grats} width={71} height={15} mode={'fill'} />
          }
          rightContent={<Icon src={hamburger} />}
        />
        <MainBoard>
          <MainText>
            <span>{'김민정'}</span>님의
            <br />
            <span>{'촹민아 생일 축하한다앜'}</span>까지
            <br />
            <span className="day">D-{'1'}</span>
            <span> 남았어요!</span>
            <IconContainer>
              <Icon src={share} width={24} height={24} />
              <Icon src={bookmark} width={24} height={24} />
            </IconContainer>
          </MainText>
        </MainBoard>
      </Background>
      {<EventImage />}
    </>
  );
};

export default EventDetailPage;
