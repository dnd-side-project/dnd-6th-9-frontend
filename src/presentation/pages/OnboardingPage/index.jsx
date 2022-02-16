import React, { useRef } from 'react';
import {
  OnboardingWrapper,
  BottomFixedContainer,
  LeftSkipText,
  RightNextIcon,
  RootButton,
} from './style';
import { OnboardingSlider } from '@components/domain';
import { ReactComponent as ArrowRightBtn } from '@assets/images/arrow_right.svg';
import { SLIDES } from '@utils/constants';
import { useNavigate } from 'react-router-dom';

const OnboardingPage = () => {
  const swiperRef = useRef(null);
  const navigate = useNavigate();

  const handleNext = () => {
    console.log(swiperRef.current.swiper);
    swiperRef.current.swiper.slideNext();
  };

  const redirectLoginPage = () => {
    navigate('/login');
  };

  return (
    <OnboardingWrapper>
      <OnboardingSlider slides={SLIDES} ref={swiperRef} />
      <BottomFixedContainer>
        <RootButton id="skipBtn" onClick={redirectLoginPage}>
          <LeftSkipText>SKIP</LeftSkipText>
        </RootButton>
        <RootButton id="nextBtn" onClick={handleNext}>
          <RightNextIcon>
            <ArrowRightBtn />
          </RightNextIcon>
        </RootButton>
      </BottomFixedContainer>
    </OnboardingWrapper>
  );
};

export default OnboardingPage;
