import React from 'react';
import PropTypes from 'prop-types';
import { MainThemeContainer, ThemeTop, ThemeBottom } from './style';
import { WindowList } from '@components/domain';

const Dummy = [
  { isOpen: false, dDay: 6, message: 0 },
  { isOpen: false, dDay: 5, message: 5 },
  { isOpen: false, dDay: 4, message: 0 },
  { isOpen: false, dDay: 3, message: 10 },
  { isOpen: false, dDay: 2, message: 5 },
  { isOpen: false, dDay: 1, message: 0 },
  { isOpen: false, dDay: 0, message: 10 },
];

const AnniversaryMainTheme = () => {
  const renderWindow = (list) => {
    let result = [];
    for (let i = 0; i < list.length; i += 3) {
      result.push(list.slice(i, i + 3));
    }

    if (list.length <= 3) {
      result.push([]);
    }
    //result [[{}}, {}, {}], [{}, {}, {}], [{}, {}]]
    return result.map((r, index) => {
      return <WindowList key={index} list={r} />;
    });
  };

  return (
    <MainThemeContainer>
      <ThemeTop />
      {renderWindow(Dummy)}
      <ThemeBottom />
    </MainThemeContainer>
  );
};

export default AnniversaryMainTheme;

AnniversaryMainTheme.propTypes = {
  list: PropTypes.string,
};
