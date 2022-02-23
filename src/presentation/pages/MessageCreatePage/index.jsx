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
  buttonStyle,
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
  totalStep: 4,
};

const MessageCreatePage = () => {
  const [step, setStep] = useState(MESSAGE_PROGRESS_VALUE.current);
  const [formData, setFormData] = useState(new FormData());
  const [errors, setErrors] = useState({});

  const onClickDay = (e) => {
    const dDay = e.target.textContent[2]; //D-5
    const targetDay = moment(Dummy.eventDate)
      .subtract(dDay, 'd')
      .format('YYYY-MM-DD');

    setFormData({
      ...formData,
      ['open-date']: targetDay,
    });
    setErrors({});
  };

  const onClickPresent = (type) => {
    setFormData({
      ...formData,
      ['gift-id']: type,
    });
    setErrors({});
  };

  const handleChangeTextArea = (content) => {
    setFormData({
      ...formData,
      ['content']: content,
    });
    setErrors({});
  };

  const handleChangeFile = (file) => {
    setFormData({
      ...formData,
      ['image-url']: file,
    });
    setErrors({});
  };

  const handleChangeName = (name) => {
    setFormData({
      ...formData,
      ['nick-name']: name,
    });
    setErrors({});
  };

  const handleChangePrivate = (checked) => {
    setFormData({
      ...formData,
      ['public']: checked,
    });
    setErrors({});
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
      console.log(formData);
      switch (step) {
        case 1:
          !formData['open-date']
            ? setErrors({
                openDate: '날짜를 선택해주세요.',
              })
            : handleNextStep();
          break;
        case 2:
          !formData['gift-id']
            ? setErrors({ gift: '선물을 선택해주세요.' })
            : handleNextStep();
          break;
        case 3: {
          if (!(formData['nick-name'] && formData['content'])) {
            setErrors({
              content: '메세지와 닉네임을 입력해주세요.',
            });
          } else {
            handleNextStep();
          }
          break;
        }
        default:
          break;
      }
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
            errors={errors}
          />
        );
      case 2:
        return (
          <MessageCreateStep2
            labels={labels}
            onClickPresent={onClickPresent}
            errors={errors}
          />
        );
      case 3:
        return (
          <MessageCreateStep3
            handleChangeTextArea={handleChangeTextArea}
            handleChangeFile={handleChangeFile}
            handleChangeName={handleChangeName}
            handleChangePrivate={handleChangePrivate}
            errors={errors}
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
          style={buttonStyle}
          onClick={() => handleCreateMessage(step)}
        >
          {step !== 3 ? '다음으로' : '작성완료'}
        </Button>
      </ButtonWrapper>
    </Background>
  );
};

export default MessageCreatePage;
