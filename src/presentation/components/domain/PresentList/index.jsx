import React from 'react';
import PropTypes from 'prop-types';
//import { useLocation } from 'react-router';
//import queryString from 'query-string';
import { Button, Image } from '@components/base';
import { ListContainer, ButtonStyle } from './style.js';
import pencil from '@assets/images/school_present/pencil.png';

const PresentList = ({ onClickPresent }) => {
  /*
  const location = useLocation();
  const searchParams = queryString.parse(location.search);
  const { isLoading, error, data, isFetching } = useQuery("getData", () =>
    fetch().then((res) => res.json())
  );
  */

  const dummydata = [
    { type: 'airPod', src: pencil },
    { type: 'money', src: pencil },
    { type: 'nintendo', src: pencil },
    { type: '4', src: pencil },
    { type: '5', src: pencil },
    { type: '6', src: pencil },
    { type: '7', src: pencil },
    { type: '8', src: pencil },
    { type: '9', src: pencil },
    { type: '10', src: pencil },
    { type: '11', src: pencil },
  ];

  return (
    <ListContainer>
      {dummydata.map((presentImage, index) => {
        return (
          <>
            <Button
              key={index}
              type={'select'}
              style={ButtonStyle}
              onClick={() => onClickPresent(presentImage.type)}
            >
              <Image
                key={index}
                width={'100%'}
                height={'100%'}
                src={presentImage.src}
              />
            </Button>
          </>
        );
      })}
    </ListContainer>
  );
};

export default PresentList;

PresentList.propTypes = {
  onClickPresent: PropTypes.func,
};
