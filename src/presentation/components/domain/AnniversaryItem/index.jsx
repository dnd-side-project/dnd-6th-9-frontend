import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  Container,
  ContentContainer,
  Title,
  DateIndicator,
  Date,
  IconWrapper,
  ModalStyle,
  ModalContent,
  ModalText,
  ModalButtonStyle,
  ModalSubText,
} from './style';
import birthDayImage from '@assets/images/mini_birthday.png';
import schoolImage from '@assets/images/mini_school.png';
import defaultImage from '@assets/images/mini_default.png';
import { ReactComponent as BookMarkFilled } from '@assets/icons/bookmark_filled_purple.svg';
import { ReactComponent as BookMark } from '@assets/icons/bookmark_grey.svg';
import { Image, StatusBadge, Modal, Button } from '@components/base';
import { timeCalculateFunc } from '@utils/timeCalculateFunc';

const ThemeImage = {
  생일: birthDayImage,
  입학: schoolImage,
  기본: defaultImage,
};

const AnniversaryItem = ({ data }) => {
  const [visible, setVisible] = useState(false);

  const renderStatusBadge = (eventDate, createdDate) => {
    const result = timeCalculateFunc(moment(), eventDate);

    if (result < 0) {
      return (
        <>
          <StatusBadge isProgress={false}>종료</StatusBadge>
          <Date>
            {`${moment(createdDate).format('YYYY.MM.DD')} - ${moment(
              eventDate,
            ).format('MM.DD')}`}
          </Date>
        </>
      );
    } else {
      return (
        <>
          <StatusBadge isProgress={true}>진행중</StatusBadge>
          <Date>D-{result === 0 ? 'Day' : result}</Date>
        </>
      );
    }
  };

  const onClickBookMark = () => {
    if (data.isScrap) {
      setVisible(true);
    }
  };
  const onClickDelete = () => {};
  const onClickCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Container>
        <Image src={ThemeImage[data.theme]} />
        <ContentContainer>
          <Title>{data.eventName}</Title>
          <DateIndicator>
            {renderStatusBadge(data.eventDate, data.createdDate)}
          </DateIndicator>
        </ContentContainer>
        <IconWrapper onClick={onClickBookMark}>
          {data.isScrap ? <BookMarkFilled /> : <BookMark />}
        </IconWrapper>
      </Container>
      <Modal width={'90%'} visible={visible} css={ModalStyle}>
        <ModalContent>
          <ModalText>스크랩을 삭제할까요?</ModalText>
          <ModalSubText>스크랩한 기념일이 사라져요.</ModalSubText>
          <Button
            type={'danger'}
            onClick={onClickDelete}
            style={ModalButtonStyle}
          >
            삭제
          </Button>
          <Button
            type={'secondary'}
            onClick={onClickCancel}
            style={ModalButtonStyle}
          >
            취소
          </Button>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AnniversaryItem;

AnniversaryItem.propTypes = {
  data: PropTypes.object,
};
