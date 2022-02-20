import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import { AnniversaryCard } from '@components/domain';

const AnniversaryList = ({ list }) => {
  const swiperStyles = {
    margin: '0 -16px',
  };

  const slider = {
    width: '100%',
  };

  const renderAnniversaryList = (list) =>
    // 기념일이 있는 경우와 없는 경우
    list.length > 0 ? (
      list.map((item, index) => (
        <SwiperSlide style={slider} key={index}>
          <AnniversaryCard {...item} link={`/${item.title}`} />
        </SwiperSlide>
      ))
    ) : (
      <SwiperSlide style={slider}>
        <AnniversaryCard />
      </SwiperSlide>
    );

  return (
    <>
      <Swiper
        style={swiperStyles}
        spaceBetween={6}
        centeredSlides={true}
        slidesPerView={1.17}
      >
        {renderAnniversaryList(list)}
      </Swiper>
    </>
  );
};

export default AnniversaryList;

AnniversaryList.propTypes = {
  list: PropTypes.array,
};
