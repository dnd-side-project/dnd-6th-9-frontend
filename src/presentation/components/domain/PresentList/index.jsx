import React from 'react';
import PropTypes from 'prop-types';
//import { useLocation } from 'react-router';
//import queryString from 'query-string';
import { Button, Image } from '@components/base';
import { ListContainer } from './style.js';
import present from './present.svg';

const PresentList = ({ onClickPresent }) => {
  /*
  const location = useLocation();
  const searchParams = queryString.parse(location.search);
  const { isLoading, error, data, isFetching } = useQuery("getData", () =>
    fetch().then((res) => res.json())
  );
  */

  const dummydata = [
    { type: 'airPod', src: present },
    { type: 'money', src: present },
    { type: 'nintendo', src: present },
    { type: '4', src: present },
    { type: '5', src: present },
    { type: '6', src: present },
    { type: '7', src: present },
    { type: '8', src: present },
    { type: '9', src: present },
    { type: '10', src: present },
    { type: '11', src: present },
    { type: '12', src: present },
  ];

  return (
    <ListContainer>
      {dummydata.map((presentImage, index) => {
        return (
          <Button
            key={index}
            type={'select'}
            style={{ width: '104px', height: '104px', marginBottom: '8px' }}
            onClick={() => onClickPresent(presentImage.type)}
          >
            <Image
              key={present.type}
              width={104}
              height={104}
              src={presentImage.src}
            />
          </Button>
        );
      })}
    </ListContainer>
  );
};

export default PresentList;

PresentList.propTypes = {
  onClickPresent: PropTypes.func,
};
