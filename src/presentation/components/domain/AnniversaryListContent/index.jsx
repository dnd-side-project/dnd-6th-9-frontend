import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { parse } from 'query-string';
import {
  ListContainer,
  EmptyListContainer,
  Title,
  SubTitle,
  ImageWrapper,
  ShareIconWrapper,
  ButtonStyleMe,
  ButtonStyleScrap,
} from './style';
import presentBoxMe from '@assets/images/present_box_me.png';
import presentBoxScrap from '@assets/images/present_box_scrap.png';
import { ReactComponent as ShareIcon } from '@assets/icons/share_icon.svg';
import { Image } from '@components/base';
import { AnniversaryItem } from '@components/domain';

const EMPTY_LIST = {
  '나의 기념일': {
    title: '기념일이 없어요!',
    src: presentBoxMe,
  },
  '스크랩한 기념일': {
    title: '스크랩한 기념일이 없어요!',
    src: presentBoxScrap,
  },
};
const DUMMY_EVENT = [
  {
    eventid: '1',
    theme: '생일',
    eventName: '생일축하한다창민아!!!!',
    eventDate: '2022-02-28',
    createdDate: '2022-02-15',
    isScrap: true,
  },
  {
    eventid: '2',
    theme: '입학',
    eventName: '생일축하한다창민아!!!!',
    eventDate: '2022-03-01',
    createdDate: '2022-02-15',
    isScrap: false,
  },
  {
    eventid: '1',
    theme: '기본',
    eventName: '생일축하한다창민아!!!!',
    eventDate: '2022-03-01',
    createdDate: '2022-02-15',
    isScrap: true,
  },
];

const DUMMY_SCRAP = [
  {
    eventid: '1',
    theme: '생일',
    eventName: '스크랩1',
    eventDate: '2022-03-01',
    createdDate: '2022-02-15',
    isScrap: true,
  },
  {
    eventid: '2',
    theme: '생일',
    eventName: '스크랩2',
    eventDate: '2022-03-01',
    createdDate: '2022-02-15',
    isScrap: true,
  },
  {
    eventid: '1',
    theme: '생일',
    eventName: '스크랩3',
    eventDate: '2022-03-01',
    createdDate: '2022-02-15',
    isScrap: true,
  },
];

const AnniversaryListContent = () => {
  const item = parse(useLocation().search).q;
  const [data, setData] = useState([]);

  useEffect(() => {
    //data = fetch();
    item === '나의 기념일'
      ? setData([...DUMMY_EVENT])
      : setData([...DUMMY_SCRAP]);
  }, [item]);

  return (
    <>
      <ListContainer>
        {data.length === 0 ? (
          <>
            <EmptyListContainer>
              <Title>{EMPTY_LIST[item].title}</Title>
              <SubTitle>소중한 기억을 만들어 보세요.</SubTitle>
              <ImageWrapper>
                <Image
                  src={EMPTY_LIST[item].src}
                  height={'100%'}
                  width={'100%'}
                />
              </ImageWrapper>
              {item === '나의 기념일' ? (
                <ButtonStyleMe className="primary">나의 기념일</ButtonStyleMe>
              ) : (
                <ButtonStyleScrap className="select">
                  <ShareIconWrapper>
                    <ShareIcon />
                  </ShareIconWrapper>
                  GRATZ! 공유하기
                </ButtonStyleScrap>
              )}
            </EmptyListContainer>
          </>
        ) : (
          <>
            {data.map((d, index) => (
              <AnniversaryItem key={index} data={d} />
            ))}
          </>
        )}
      </ListContainer>
    </>
  );
};

export default AnniversaryListContent;
