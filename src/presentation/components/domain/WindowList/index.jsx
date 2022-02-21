import React from 'react';
import PropTypes from 'prop-types';
import school_window_close from '@assets/images/schoolTheme/school_window_close.svg';
import school_window_open from '@assets/images/schoolTheme/school_window_open.svg';
import school_window_dummy from '@assets/images/schoolTheme/school_window_dummy.svg';
import { Image, Badge } from '@components/base';
import {
  ThemeMiddle,
  WindowWrapper,
  TitleContainer,
  DayText,
  badgeStyle,
} from './style';
//Badge = ({ children, count, maxCount, showZero, dot, ...props })

const renderWindowList = (list, onClickDay) => {
  const listLength = list.length;

  //날짜 WINDOW 추가 부분
  const result = list.map((window, index) => (
    <>
      <WindowWrapper key={index}>
        {window.isOpen ? (
          <Image
            src={school_window_open}
            onClick={() => onClickDay(window.day)}
          />
        ) : (
          <Image
            src={school_window_close}
            onClick={() => onClickDay(window.day)}
          />
        )}
        <TitleContainer>
          <DayText>D-{window.day === 0 ? 'Day' : window.day}</DayText>
          {window.message ? (
            <Badge count={window.message} css={badgeStyle} />
          ) : null}
        </TitleContainer>
      </WindowWrapper>
    </>
  ));

  //더미 WINDOW 추가 부분
  for (let i = 0; i < 3 - listLength; i++) {
    result.push(
      <WindowWrapper>
        <Image src={school_window_dummy} />
      </WindowWrapper>,
    );
  }

  return result;
};

const WindowList = ({ list }) => {
  const onClickDay = (value) => {
    console.log(value);
  };
  return (
    <>
      <ThemeMiddle>{renderWindowList(list, onClickDay)}</ThemeMiddle>
    </>
  );
};

export default WindowList;

WindowList.propTypes = {
  list: PropTypes.array,
};
