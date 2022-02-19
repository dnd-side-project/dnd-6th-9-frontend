import React, { useState } from 'react';
import {
  Background,
  Spacer,
  TitleContainer,
  MainTitle,
  SubTitle,
  InputWrapper,
  ButtonWrapper,
  Message,
} from './style';
import { Input, Button, Modal } from '@components/base';
import { DefaultPageHeader } from '@components/domain';

const MyPage = () => {
  const [nickname, setNickName] = useState('');
  const [nicknameError, setNickNameError] = useState(true);
  const [duplicateError, setDuplicateError] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleChange = ({ value }) => {
    console.log(nickname);

    setNickName(value);
    if (value.length < 2 || value === '') {
      setNickNameError(true);
      setDuplicateError(false);
    } else {
      setNickNameError(false);
      setDuplicateError(false);
      /** 닉네임 중복체크 api
       * setDuplicateError() **/
    }
  };

  const handleGoBack = () => {};

  const handleUpdateNickname = () => {
    setVisible(true);
  };

  return (
    <Background>
      <DefaultPageHeader handleGoBack={handleGoBack} />
      <Spacer />
      <TitleContainer>
        <MainTitle>닉네임 변경</MainTitle>
        <SubTitle>
          <div>이전에 작성한 메시지의 닉네임은</div>
          <div>변경되지 않아요</div>
        </SubTitle>
      </TitleContainer>

      <InputWrapper>
        <Input
          onChange={handleChange}
          placeholder={'텍스트를 입력해주세요'}
          error={duplicateError}
          maxLength={10}
        />
      </InputWrapper>
      {duplicateError && (
        <Message className="duplicate">이미 사용중인 닉네임이에요.</Message>
      )}
      {nicknameError && <Message>최소 2자 이상 입력해주세요.</Message>}
      {!nicknameError && !duplicateError && (
        <Message>사용 가능한 닉네임이에요.</Message>
      )}

      <ButtonWrapper>
        <Button
          type={nicknameError || duplicateError ? 'secondary' : 'primary'}
          disabled={nicknameError || duplicateError}
          style={{ height: '48px', width: '100%' }}
          onClick={handleUpdateNickname}
        >
          변경하기
        </Button>
      </ButtonWrapper>

      <Modal width={328} height={142} visible={visible}>
        <div>테스트</div>
      </Modal>
    </Background>
  );
};

export default MyPage;
