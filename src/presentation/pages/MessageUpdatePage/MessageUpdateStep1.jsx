import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Button } from '@components/base';
import {
  StepTitle,
  DayListContainer,
  DayButtonStyle,
  SelectedDayStyle,
} from './style';
import { useEffect } from 'react';
import { timeCalculateFunc } from '@utils/timeCalculateFunc';

const MessageUpdateStep1 = ({
  formData,
  onClickDay,
  eventDate,
  createdDate,
}) => {
  const [days, setDays] = useState(); // 디데이까지 남은 날짜 계산
  const [passed, setPassed] = useState(); //이벤트 생성날부터 ~ 오늘까지 날짜
  const [selectedDay, setSelectedDay] = useState();

  useEffect(() => {
    setDays(timeCalculateFunc(createdDate, eventDate)); //디데이까지 남은 날짜 계산
    setPassed(timeCalculateFunc(createdDate, moment().format('YYYY-MM-DD'))); //이벤트 생성-오늘날짜까지
    setSelectedDay(timeCalculateFunc(formData['open-date'], eventDate)); // 2-27 3-1
  });

  const getCards = () => {
    const list = [];
    for (let i = days; i >= days - passed; i--) {
      list.push(
        <Button key={i} type="select" style={DayButtonStyle} disabled>
          D-{i}
        </Button>,
      );
    }

    for (var j = days - passed - 1; j >= 1; j--) {
      list.push(
        <Button
          key={j}
          type={'select'}
          style={selectedDay === j ? SelectedDayStyle : DayButtonStyle}
          onClick={onClickDay}
        >
          D-{j}
        </Button>,
      );
    }

    list.push(
      <Button
        key={0}
        style={selectedDay === 0 ? SelectedDayStyle : DayButtonStyle}
        type={'select'}
        onClick={onClickDay}
      >
        D-Day
      </Button>,
    );

    return list;
  };

  return (
    <>
      <StepTitle>선물이 도착할 날을 선택해주세요</StepTitle>
      <DayListContainer>{getCards()}</DayListContainer>
    </>
  );
};

export default MessageUpdateStep1;

MessageUpdateStep1.propTypes = {
  formData: PropTypes.object,
  eventDate: PropTypes.string,
  createdDate: PropTypes.string,
  onClickDay: PropTypes.func,
};
