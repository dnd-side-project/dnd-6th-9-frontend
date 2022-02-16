import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Image } from '@components/base';
import {
  SwiperStyle,
  SwiperWrapper,
  TitleText,
  BodyText,
  LogoText,
} from './style';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

// Swiper Core
SwiperCore.use([Pagination]);

const renderSlide = (slides) =>
  slides.map(({ logo, title, subTitle, img }, index) => (
    <SwiperSlide key={index}>
      <SwiperWrapper>
        <LogoText>{logo}</LogoText>
        <TitleText>{title}</TitleText>
        <Image
          src={img}
          alt={`Onboarding image ${index + 1} 번째`}
          width={'100%'}
          height={'50%'}
        />
        <BodyText>{subTitle}</BodyText>
      </SwiperWrapper>
    </SwiperSlide>
  ));

const OnboardingSlider = forwardRef(({ slides }, swiperRef) => {
  return (
    <Swiper
      css={SwiperStyle}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      ref={swiperRef}
    >
      {renderSlide(slides)}
    </Swiper>
  );
});

OnboardingSlider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subTitle: PropTypes.string,
      img: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default OnboardingSlider;
