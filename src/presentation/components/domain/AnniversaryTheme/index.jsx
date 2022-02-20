import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AnniversaryList } from '@components/domain';
import {
  HeaderBox,
  Title,
  ViewAllText,
  Wrapper,
  ArrowRightIcon,
} from './style';
const DUMMY_DATA = [
  {
    title: '생일',
    targetDate: new Date().toLocaleDateString(),
    isProgress: true,
    isScrap: true,
    presentCount: 10,
    presentList: [
      {
        title:
          '생일축하한다창민아!!!!!!생일축하한다창민아!!!!!!생일축하한다창민아!!!!!!',
        presentImage: 'https://via.placeholder.com/150',
      },
      {
        title: '생일축하',
        presentImage: 'https://via.placeholder.com/150',
      },
      {
        title: '생일축하',
        presentImage: 'https://via.placeholder.com/150',
      },
      {
        title: '생일축하',
        presentImage: 'https://via.placeholder.com/150',
      },
      {
        title: '생일축하',
        presentImage: 'https://via.placeholder.com/150',
      },
      {
        title: '생일축하',
        presentImage: 'https://via.placeholder.com/150',
      },
      {
        title: '생일축하',
        presentImage: 'https://via.placeholder.com/150',
      },
    ],
  },
  {
    title: '생일',
    targetDate: new Date().toLocaleDateString(),
    isProgress: false,
    isScrap: false,
    presentList: [],
  },
  {
    title: '생일',
    targetDate: new Date().toLocaleDateString(),
    isProgress: false,
    isScrap: false,
    presentList: [],
  },
];

const AnniversaryTheme = ({ title }) => {
  return (
    <Wrapper>
      <HeaderBox>
        <Title>{title}</Title>
        <Link to="/">
          <ViewAllText>
            전체보기 <ArrowRightIcon />
          </ViewAllText>
        </Link>
      </HeaderBox>

      <AnniversaryList list={DUMMY_DATA} />
    </Wrapper>
  );
};

export default AnniversaryTheme;

AnniversaryTheme.propTypes = {
  title: PropTypes.string,
};
