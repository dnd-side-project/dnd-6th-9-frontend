import React from 'react';
import { Image } from '@components/base';
import { EventWrapper } from './style';
import BD_head from '@assets/images/event/BD_head.svg';
import BD_body from '@assets/images/event/BD_body.svg';
import BD_bottom from '@assets/images/event/BD_bottom.svg';

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
