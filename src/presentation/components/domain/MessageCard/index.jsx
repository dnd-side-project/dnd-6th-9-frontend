import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  MessageContainer,
  ContentTitle,
  Content,
  BottomWrapper,
  DateWrapper,
  Date,
  Button,
  arrowTop,
  arrowBottom,
} from './style';
import { Image, Icon } from '@components/base';
import { DropDown } from '@components/domain';
import presentBox from '@assets/images/present_box_message.png';
import arrowRight from '@assets/icons/arrow_right.svg';
import fortuneCookie from '@assets/images/fortune_cookie_message.png';
import { COLOR } from '@styles';

moment.lang('ko', {
  weekdays: [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ],
  weekdaysShort: ['일', '월', '화', '수', '목', '금', '토'],
});

const MessageCard = ({ message }) => {
  const [fullContent, setFullContent] = useState(false);

  const onClickOpen = (messageId) => {
    console.log(messageId);
  };

  return (
    <MessageContainer>
      {message.isOpen ? (
        <>
          <DropDown />
          <Image src={presentBox} />
          <ContentTitle>{message.userNickName}님의 메세지</ContentTitle>
          <Content className={!fullContent && 'fold'}>
            {message.content}
          </Content>
          <BottomWrapper>
            <Date>
              {moment(message.createDate).format('YYYY년 M월 DD일 (ddd)')}
            </Date>
            {fullContent ? (
              <Button onClick={() => setFullContent(false)}>
                접기
                <Icon
                  src={arrowRight}
                  width={16}
                  height={16}
                  fill={COLOR.PURPLE_500}
                  css={arrowTop}
                />
              </Button>
            ) : (
              <Button onClick={() => setFullContent(true)}>
                전체보기
                <Icon
                  src={arrowRight}
                  width={16}
                  height={16}
                  fill={COLOR.PURPLE_500}
                  css={arrowBottom}
                />
              </Button>
            )}
          </BottomWrapper>
        </>
      ) : (
        <>
          <DropDown />
          <Image src={presentBox} />
          <ContentTitle>읽지 않은 메세지</ContentTitle>
          <Content className={!fullContent && 'fold'}>
            두근두근
            <br /> 아직읽지 않은 메세지에요!
          </Content>
          <BottomWrapper>
            <Date>
              {moment(message.createDate).format('YYYY년 M월 DD일 (ddd)')}
            </Date>
            <Button onClick={() => onClickOpen(message.id)}>
              확인하기
              <Icon
                src={arrowRight}
                width={16}
                height={16}
                fill={COLOR.PURPLE_500}
              />
            </Button>
          </BottomWrapper>
        </>
      )}
    </MessageContainer>
  );
};

export default MessageCard;

MessageCard.propTypes = {
  message: PropTypes.object,
};

export const LuckyMessageCard = () => {
  return (
    <>
      <MessageContainer>
        <DropDown />
        <Image src={fortuneCookie} width={'23%'} height={'23%'} />
        <ContentTitle>행운의 메세지</ContentTitle>
        <DateWrapper>
          <Date>{moment().format('YYYY년 M월 DD일 (ddd)')}</Date>
        </DateWrapper>
        <Content>
          오늘 정말 고생하셨어요!
          <br />
          스스로에게 작은 선물을 줘도 좋을날 이에요
        </Content>
      </MessageContainer>
    </>
  );
};
