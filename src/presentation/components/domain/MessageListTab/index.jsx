import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { timeCalculateFunc } from '@utils/timeCalculateFunc';
import { StatusBadge } from '@components/base';
import {
  Text,
  sliderStyle,
  swiperStyle,
  DotWrapper,
  Dot,
  TabWrapper,
} from './style';

const MessageListTab = ({ startDay, endDay }) => {
  //2022-03-02 ~ 2022-03-08   D-6 ~
  const duration = timeCalculateFunc(startDay, endDay);
  const [activeTab, setActiveTab] = useState(duration);

  const onClickTab = (index) => {
    setActiveTab(index);
  };

  const renderSlide = (duration) => {
    return Array.from({ length: duration + 1 }).map((slide, index) => {
      return (
        <SwiperSlide
          key={index}
          style={sliderStyle}
          onClick={() => onClickTab(duration - index)}
        >
          <Link to={`?q=${duration - index}`}>
            {activeTab === duration - index ? (
              <TabWrapper>
                <DotWrapper>
                  <Dot />
                </DotWrapper>
                <StatusBadge isProgress={true}>
                  D-{duration - index === 0 ? 'day' : duration - index}
                </StatusBadge>
              </TabWrapper>
            ) : (
              <Text>D-{duration - index === 0 ? 'day' : duration - index}</Text>
            )}
          </Link>
        </SwiperSlide>
      );
    });
  };

  return (
    <Swiper
      slidesPerView={6}
      grabCursor={true}
      slidesOffsetBefore={16}
      slidesOffsetAfter={16}
      style={swiperStyle}
    >
      {renderSlide(duration)}
    </Swiper>
  );
};

export default MessageListTab;

MessageListTab.propTypes = {
  startDay: PropTypes.string,
  endDay: PropTypes.string,
};
