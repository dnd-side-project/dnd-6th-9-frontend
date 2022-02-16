import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SplashScreenWrapper,
  BounceBox,
  BounceLogo,
  ContentBox,
  SubTitle,
  FirstBounce,
} from './style';
const SplashScreenPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/onboarding');
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <SplashScreenWrapper>
      <FirstBounce>
        <BounceBox />
      </FirstBounce>
      <ContentBox>
        <BounceLogo />
        <SubTitle>소중한 날을 함께 기다리는 즐거움</SubTitle>
      </ContentBox>
    </SplashScreenWrapper>
  );
};

export default SplashScreenPage;
