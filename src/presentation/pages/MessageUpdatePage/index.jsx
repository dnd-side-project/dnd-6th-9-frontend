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
import MessageUpdateStep1 from './MessageUpdateStep1';
import MessageUpdateStep2 from './MessageUpdateStep2';
import MessageUpdateStep3 from './MessageUpdateStep3';

const DUMMY_EVENT = {
  eventId: 1,
  theme: '생일',
  eventName: '이벤트이름',
  dDayName: '창민아 생일 축하한다앜',
  eventDescription: '이벤트설명',
  eventDate: '2022-3-1',
  createdDate: '2022-2-18',
};

const DUMMY_MESSAGE = {
  'message-id': 1,
  'gift-name': 'airpods',
  'gift-image-url': '',
  'user-nick-name': '촹민',
  content: '촹민아생일축하한다.',
  'image-url':
    'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA3MDdfMjE5%2FMDAxNTk0MDgyNzExMTcx.GV0W_cijeSxUrsZWLdj_h8QZbqGQhEneF3ldfLlN0vkg.Nndal0ZG-JSfxwuqEHBu3APXej5ZFPJHaFSy0xFt4GAg.PNG.sicarious%2Fimage.png&type=sc960_832',
  public: false,
  'create-date': '2022-02-27',
};

const labels = ['전체', '생일', '기본'];

const MESSAGE_PROGRESS_VALUE = {
  current: 1,
  totalStep: 3,
};

const MessageUpdatePage = () => {
  const [step, setStep] = useState(MESSAGE_PROGRESS_VALUE.current);
  const [formData, setFormData] = useState({
    'open-date': DUMMY_MESSAGE['create-date'],
    'gift-id': DUMMY_MESSAGE['gift-name'],
    content: DUMMY_MESSAGE['content'],
    'nick-name': DUMMY_MESSAGE['user-nick-name'],
    'image-url': DUMMY_MESSAGE['image-url'],
    public: DUMMY_MESSAGE['public'],
  });
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
    const targetDay = moment(DUMMY_EVENT.eventDate)
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

  const handleChangeTextArea = (value) => {
    const { text, error } = value;

    if (!error) {
      setFormData({
        ...formData,
        ['content']: text,
      });
    }
  };

  const handleChangeFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFormData({
        ...formData,
        ['image-url']: reader.result,
      });
    };
  };

  const handleDeleteFile = () => {
    setFormData({
      ...formData,
      ['image-url']: '',
    });
  };

  const handleChangeName = ({ value }) => {
    setFormData({
      ...formData,
      ['nick-name']: value,
    });
  };

  const handleChangePrivate = (value) => {
    const { checked } = value;
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
          <MessageUpdateStep1
            formData={formData}
            eventDate={DUMMY_EVENT.eventDate}
            createdDate={DUMMY_EVENT.createdDate}
            onClickDay={onClickDay}
          />
        );
      case 2:
        return (
          <MessageUpdateStep2
            formData={formData}
            labels={labels}
            onClickPresent={onClickPresent}
          />
        );
      case 3:
        return (
          <MessageUpdateStep3
            formData={formData}
            handleChangeTextArea={handleChangeTextArea}
            handleChangeFile={handleChangeFile}
            handleDeleteFile={handleDeleteFile}
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

      <Modal width={'90%'} visible={visible} css={ModalStyle}>
        <ModalContent>
          <ModalText>메세지 수정이 완료되었어요!</ModalText>
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

export default MessageUpdatePage;
