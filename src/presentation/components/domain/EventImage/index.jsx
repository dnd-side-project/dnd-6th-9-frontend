import React from 'react';
import { Image } from '@components/base';
import { EventWrapper } from './style';
import BD_head from '@assets/images/event/BD_head.svg';
import BD_body from '@assets/images/event/BD_body.svg';
import BD_bottom from '@assets/images/event/BD_bottom.svg';

//이벤트 아이디를 받아서 api로 이벤트 받아오기 - 상위컴포넌트
//이벤트 테마, 날짜 리스트 정보 pros로 받아서 뿌리기 or api로 받아오기 ? api로 받아오는게 좋을듯
//날짜 리스트 날짜
//날짜가 보이는 것이 생성일부터디데이까지
//recoil 이벤트 리스트 저장할것인지

const EventImage = () => {
  return (
    <EventWrapper className="eventWrapper">
      <Image src={BD_head} width={'100%'} height={'none'} />
      <Image src={BD_body} width={'100%'} height={'none'} />
      <Image src={BD_body} width={'100%'} height={'none'} />
      <Image src={BD_bottom} width={'100%'} height={'none'} />
    </EventWrapper>
  );
};

export default EventImage;
