import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@components/base';
import { StepTitle, DayListContainer } from './style';
import { useEffect } from 'react';
import { timeCalculateFunc } from '@utils/timeCalculateFunc';
const MessageCreateStep1 = ({ eventDate, createdDate, onClickDay }) => {
  const [days, setDays] = useState();
  const [passed, setPassed] = useState();

  useEffect(() => {
    setDays(timeCalculateFunc(createdDate, eventDate)); //디데이까지 남은 날짜 계산
    //생성날짜 - 오늘이랑
    const now = new Date();
    const nowStr = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()}`;
    setPassed(timeCalculateFunc(createdDate, nowStr));

    const list = [];

    for (var i = days; i >= days - passed; i--) {
      list.push(i);
    }

    for (var j = days - passed - 1; j >= 1; j--) {
      list.push(j);
    }
  });

  const getCards = () => {
    const list = [];
    for (var i = days; i >= days - passed; i--) {
      list.push(
        <Button
          key={`day-${i}`}
          type={'select'}
          style={{ width: '104px', height: '120px', marginBottom: '8px' }}
          disabled
        >
          D-{i}
        </Button>,
      );
    }

    for (var j = days - passed - 1; j >= 1; j--) {
      list.push(
        <Button
          key={j}
          type={'select'}
          style={{ width: '104px', height: '120px', marginBottom: '8px' }}
          onClick={onClickDay}
        >
          D-{j}
        </Button>,
      );
    }

    return list;
  };

  return (
    <>
      <StepTitle>선물이 도착할 날을 선택해주세요</StepTitle>
      <DayListContainer>{getCards()}</DayListContainer>
    </>
  );
};

export default MessageCreateStep1;

MessageCreateStep1.propTypes = {
  eventDate: PropTypes.string,
  createdDate: PropTypes.string,
  onClickDay: PropTypes.func,
};

/**
 * 
 * color: ${COLOR.GRAY_900};
  ${FONT.SB_16_TITLE};
 */

/**
 *
 *
 *
 */
