import React from 'react';
import { SOCIAL_LOGIN_BUTTON_LIST } from '@utils/constants';
import {
  LoginPageWrapper,
  Bouncebox,
  SocialLoginBtn,
  MainNoticeText,
  SubNoticeText,
  TitleText,
  LoginFormBox,
  BtnText,
  BtnIcon,
  BtnImage,
} from './style';
const LoginPage = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    window.location = e.target.value;
  };

  const renderBtnList = (buttonList) =>
    buttonList.map(({ Text, color, icon, link }, index) => (
      <SocialLoginBtn
        bgColor={color}
        key={index}
        onClick={handleLogin}
        value={link}
      >
        <BtnIcon>
          <BtnImage src={icon} alt={Text} />
        </BtnIcon>
        <BtnText>{Text}</BtnText>
      </SocialLoginBtn>
    ));

  return (
    <LoginPageWrapper>
      <Bouncebox />
      <TitleText>
        GRATZ!와 함께
        <br />
        기념일을 기다려볼까요?
      </TitleText>
      <LoginFormBox>
        <MainNoticeText>먼저, 로그인이 필요해요!</MainNoticeText>
        {renderBtnList(SOCIAL_LOGIN_BUTTON_LIST)}
        <SubNoticeText>
          사용자 이메일, 닉네임 외의 다른 정보는 수집하지 않아요.
        </SubNoticeText>
      </LoginFormBox>
    </LoginPageWrapper>
  );
};

export default LoginPage;
