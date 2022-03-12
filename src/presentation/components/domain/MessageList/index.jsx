import React from 'react';
import { Container, Title } from './style';
import { MessageCard, LuckyMessageCard } from '@components/domain';
import { Image } from '@components/base';
import { timeCalculateFunc } from '@utils/timeCalculateFunc';
import pencil from '@assets/images/school_present/pencil.png';
import presentBoxEmpty from '@assets/images/present_box_empty.png';
import { useLocation } from 'react-router-dom';
import { parse } from 'query-string';
import moment from 'moment';

const DUMMY_MESSAGE = [
  {
    messageId: 1,
    giftName: '눈에 쏙쏙 들어오는 필기구',
    giftImageUrl: pencil,
    userNickName: '김민정',
    content:
      '민정아 자니 요새 네가 너무 보고싶다 미안 이런 메시지 보내서 민정아 자니 요새 네가 너무보고싶다 미안 이런 메시지 보내서 민정아 자니 요새 네가 너무 보고싶다',
    imageUrl: '',
    public: true,
    createDate: '2022-03-02',
    isOpen: true,
  },
  {
    messageId: 1,
    giftName: '눈에 쏙쏙 들어오는 필기구',
    giftImageUrl: pencil,
    userNickName: '김민정',
    content: '민정아 .. 자니 ',
    imageUrl: '',
    public: true,
    createDate: '2022-03-02',
    isOpen: false,
  },
  {
    messageId: 1,
    giftName: '눈에 쏙쏙 들어오는 필기구',
    giftImageUrl: pencil,
    userNickName: '김민정',
    content: '민정아 .. 자니 ',
    imageUrl: '',
    public: true,
    createDate: '2022-03-02',
    isOpen: true,
  },
  {
    messageId: 1,
    giftName: '눈에 쏙쏙 들어오는 필기구',
    giftImageUrl: pencil,
    userNickName: '김민정',
    content: '민정아 .. 자니 ',
    imageUrl: '',
    public: true,
    createDate: '2022-03-02',
    isOpen: true,
  },
  {
    messageId: 1,
    giftName: '눈에 쏙쏙 들어오는 필기구',
    giftImageUrl: pencil,
    userNickName: '김민정',
    content: '민정아 .. 자니 ',
    imageUrl: '',
    public: true,
    createDate: '2022-03-02',
    isOpen: true,
  },
];

const MessageList = () => {
  const day = parse(useLocation().search).q;
  //오늘보다 미래
  if (day < timeCalculateFunc(moment().format('YYYY-MM-DD'), '2022-03-15')) {
    return (
      <Container>
        <Title>아직 확인할 수 있는 날이 아니에요!</Title>
        <Image src={presentBoxEmpty} />
      </Container>
    );
  }

  return (
    <Container>
      {DUMMY_MESSAGE.length === 0 ? (
        <Title>행운의 메시지가 왔어요!</Title>
      ) : (
        <Title>오늘은 {DUMMY_MESSAGE.length}개의 선물이 왔어요!</Title>
      )}
      {DUMMY_MESSAGE.length === 0 ? (
        <LuckyMessageCard />
      ) : (
        DUMMY_MESSAGE.map((message, index) => (
          <MessageCard key={index} message={message} />
        ))
      )}
    </Container>
  );
};

export default MessageList;
