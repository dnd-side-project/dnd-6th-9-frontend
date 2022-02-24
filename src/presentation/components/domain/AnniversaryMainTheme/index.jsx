import React from 'react';
import PropTypes from 'prop-types';
import { MainThemeContainer, ThemeTop, ThemeBottom } from './style';
import { WindowList } from '@components/domain';

const Dummy = [
  { isOpen: true, day: 6 },
  { isOpen: false, day: 5 },
  { isOpen: true, day: 4 },
  { isOpen: true, day: 3, message: 10 },
  { isOpen: false, day: 2 },
  { isOpen: true, day: 1 },
  { isOpen: true, day: 0, message: 10 },
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
