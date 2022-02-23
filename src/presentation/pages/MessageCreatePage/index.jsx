import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Button, Modal } from '@components/base';
import { DefaultPageHeader } from '@components/domain';
import {
  Background,
  MessageCreatePageContainer,
  ButtonWrapper,
  buttonStyle,
  ModalStyle,
  ModalContent,
  ModalText,
  ModalButtonStyle,
  ModalSubText,
  ButtonContainer,
} from './style';
import MessageCreateStep1 from './MessageCreateStep1';
import MessageCreateStep2 from './MessageCreateStep2';
import MessageCreateStep3 from './MessageCreateStep3';

//import arrow_left from '@assets/icons/arrow_left.svg';

const Dummy = {
  eventId: 1,
  theme: '생일',
  eventName: '이벤트이름',
  dDayName: '창민아 생일 축하한다앜',
  eventDescription: '이벤트설명',
  eventDate: '2022-3-1',
  createdDate: '2022-2-18',
};

const labels = ['전체', '생일', '기본'];

const MESSAGE_PROGRESS_VALUE = {
  current: 1,
  totalStep: 3,
};

const MessageCreatePage = () => {
  const [step, setStep] = useState(MESSAGE_PROGRESS_VALUE.current);
  const [formData, setFormData] = useState({});
  const [buttonAbled, setButtonAbled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [cancelModalVisible, setCancelModalVisible] = useState(false);
  useEffect(() => {
    if (step === 1 && formData['open-date']) {
      setButtonAbled(true);
    } else if (step === 2 && formData['gift-id']) {
      setButtonAbled(true);
    } else if (step === 3 && formData['content'] && formData['nick-name']) {
      setButtonAbled(true);
    } else {
      setButtonAbled(false);
    }
  });

  const onClickDay = (e) => {
    const dDay = e.target.textContent[2]; //D-5
    const targetDay = moment(Dummy.eventDate)
      .subtract(dDay, 'd')
      .format('YYYY-MM-DD');

    setFormData({
      ...formData,
      ['open-date']: targetDay,
    });
  };

  const onClickPresent = (type) => {
    setFormData({
      ...formData,
      ['gift-id']: type,
    });
  };

  const handleChangeTextArea = (content) => {
    setFormData({
      ...formData,
      ['content']: content,
    });
  };

  const handleChangeFile = (file) => {
    setFormData({
      ...formData,
      ['image-url']: file,
    });
  };

  const handleChangeName = (name) => {
    setFormData({
      ...formData,
      ['nick-name']: name,
    });
  };

  const handleChangePrivate = (checked) => {
    setFormData({
      ...formData,
      ['public']: checked,
    });
  };
  const handleNextStep = () => {
    setStep((step) => step + 1);
  };

  const handleBackStep = () => {
    if (step === 1) {
      setCancelModalVisible(true);
    } else {
      setStep((step) => step - 1);
    }
  };

  const onSubmit = () => {};

  const onClickDelete = () => {};

  const onClickCancel = () => {
    setCancelModalVisible(false);
  };
  const createMessage = () => {
    console.log(formData);
    setVisible(true);
  };

  const handleCreateMessage = (step) => {
    if (step !== MESSAGE_PROGRESS_VALUE.totalStep) {
      handleNextStep();
    } else {
      createMessage();
    }
  };

  const handleSwitch = (step) => {
    switch (step) {
      case 1:
        return (
          <MessageCreateStep1
            eventDate={Dummy.eventDate}
            createdDate={Dummy.createdDate}
            onClickDay={onClickDay}
          />
        );
      case 2:
        return (
          <MessageCreateStep2 labels={labels} onClickPresent={onClickPresent} />
        );
      case 3:
        return (
          <MessageCreateStep3
            handleChangeTextArea={handleChangeTextArea}
            handleChangeFile={handleChangeFile}
            handleChangeName={handleChangeName}
            handleChangePrivate={handleChangePrivate}
          />
        );
    }
  };

  return (
    <Background>
      <DefaultPageHeader handleGoBack={handleBackStep} />
      <MessageCreatePageContainer>
        {handleSwitch(step)}
      </MessageCreatePageContainer>
      <ButtonWrapper>
        <Button
          type={buttonAbled ? 'primary' : 'secondary'}
          style={buttonStyle}
          onClick={() => handleCreateMessage(step)}
          disabled={!buttonAbled}
        >
          {step !== 3 ? '다음으로' : '작성완료'}
        </Button>
      </ButtonWrapper>

      <Modal width={'80%'} visible={visible} css={ModalStyle}>
        <ModalContent>
          <ModalText>메세지 작성이 완료되었어요!</ModalText>
          <Button type={'primary'} onClick={onSubmit} style={ModalButtonStyle}>
            확인
          </Button>
        </ModalContent>
      </Modal>

      <Modal width={'90%'} visible={cancelModalVisible} css={ModalStyle}>
        <ModalContent>
          <ModalText>선물을 삭제할까요?</ModalText>
          <ModalSubText>지금까지 진행한 과정이 모두 사라져요.</ModalSubText>
          <ButtonContainer>
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
          </ButtonContainer>
        </ModalContent>
      </Modal>
    </Background>
  );
};

export default MessageCreatePage;
