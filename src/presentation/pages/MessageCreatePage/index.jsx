import React, { useState } from 'react';
import moment from 'moment';
import { Button } from '@components/base';
import { DefaultPageHeader } from '@components/domain';
import {
  Background,
  //LeftHeaderContent,
  //BackText,
  MessageCreatePageContainer,
  ButtonWrapper,
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
  const [formData, setFormData] = useState(new FormData());
  //const [content, setContent] = useState('');

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
    setStep((step) => step - 1);
  };

  const createMessage = () => {
    console.log(formData);
  };

  const handleCreateMessage = (step) => {
    if (step !== MESSAGE_PROGRESS_VALUE.totalStep) {
      handleNextStep();
    } else {
      createMessage();
    }
  };

  const headerSwitch = (step) => {
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
        {headerSwitch(step)}
      </MessageCreatePageContainer>

      <ButtonWrapper>
        <Button
          type={'primary'}
          style={{ height: '48px', width: '100%' }}
          onClick={() => handleCreateMessage(step)}
        >
          {step !== 3 ? '다음으로' : '작성완료'}
        </Button>
      </ButtonWrapper>
    </Background>
  );
};

export default MessageCreatePage;
