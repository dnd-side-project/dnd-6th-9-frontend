import React, { useState } from 'react';
import PropTypes from 'prop-types';
import school_window_close from '@assets/images/schoolTheme/school_window_close.png';
import school_window_open from '@assets/images/schoolTheme/school_window_open.png';
import school_window_dummy from '@assets/images/schoolTheme/school_window_dummy.png';
import fortune_cookie from '@assets/images/fortune_cookie.png';
import congratulation from '@assets/images/congratulation.png';
import present_box from '@assets/images/present_box.png';
import { Image, Badge, Modal, Button } from '@components/base';
import {
  ThemeMiddle,
  WindowWrapper,
  TitleContainer,
  DayText,
  badgeStyle,
  ImageWrapper,
  ModalStyle,
  ImageStyle,
  ModalContainer,
  ModalTitle,
  ModalSubTitle,
  ModalButtonStyle,
} from './style';

const renderWindowList = (list, onClickDay) => {
  const listLength = list.length;

  //날짜 WINDOW 추가 부분
  const result = list.map((window, index) => (
    <>
      <WindowWrapper key={index}>
        {window.isOpen ? (
          <Image src={school_window_open} />
        ) : (
          <ImageWrapper>
            <Image
              src={school_window_close}
              onClick={() => onClickDay(window)}
            />
          </ImageWrapper>
        )}

        <TitleContainer>
          <DayText>D-{window.dDay === 0 ? 'Day' : window.dDay}</DayText>
          {window.message ? (
            <Badge count={window.message} css={badgeStyle} />
          ) : null}
        </TitleContainer>
      </WindowWrapper>
    </>
  ));

  //더미 WINDOW 추가 부분
  for (let i = 0; i < 3 - listLength; i++) {
    result.push(
      <WindowWrapper>
        <Image src={school_window_dummy} />
      </WindowWrapper>,
    );
  }

  return result;
};

const renderModal = (day) => {
  if (day.message === 0) {
    return (
      <>
        <ImageStyle>
          <Image src={fortune_cookie} />
        </ImageStyle>
        <ModalTitle>행운의 메시지를 발견했어요!</ModalTitle>
        <ModalSubTitle>
          오늘 정말 고생하셨어요!
          <br />
          스스로에게 작은 선물을 줘도 좋을날 이에요
        </ModalSubTitle>
      </>
    );
  } else if (day.dDay === 0) {
    return (
      <>
        <ImageStyle className="congrats">
          <Image src={congratulation} />
        </ImageStyle>
        <ModalTitle>GRATZ!</ModalTitle>
        <ModalTitle>디데이가 되었어요!</ModalTitle>
        <ModalSubTitle>친구들이 보낸 선물과 함께 즐겨보세요!</ModalSubTitle>
      </>
    );
  } else {
    return (
      <>
        <ImageStyle>
          <Image src={present_box} />
        </ImageStyle>
        <ModalTitle>D-{day.dDay}의 선물이 도착했어요!</ModalTitle>
      </>
    );
  }
};

const WindowList = ({ list }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [day, setDay] = useState({});

  const onClickDay = (value) => {
    setModalVisible(true);
    setDay(value);
  };
  const onClickModalButton = () => {};

  return (
    <>
      <ThemeMiddle>{renderWindowList(list, onClickDay)}</ThemeMiddle>

      <Modal
        width={'90%'}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        css={ModalStyle}
      >
        <ModalContainer>{renderModal(day)}</ModalContainer>
        <Button
          type={'primary'}
          onClick={onClickModalButton}
          style={ModalButtonStyle}
        >
          보러가기
        </Button>
      </Modal>
    </>
  );
};

export default WindowList;

WindowList.propTypes = {
  list: PropTypes.array,
};
