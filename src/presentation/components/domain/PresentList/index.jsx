import React from 'react';
import PropTypes from 'prop-types';
import { Button, Image } from '@components/base';
import { ListContainer, ButtonStyle, SelectedButtonStyle } from './style.js';
import pencil from '@assets/images/school_present/pencil.png';

const PresentList = ({ formData, onClickPresent }) => {
  const dummydata = [
    { type: 'airpods', src: pencil },
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
      {dummydata.map((present, index) => {
        return (
          <>
            <Button
              key={index}
              type={'select'}
              style={
                formData['gift-id'] === present.type
                  ? SelectedButtonStyle
                  : ButtonStyle
              }
              onClick={() => onClickPresent(present.type)}
            >
              <Image width={'100%'} height={'100%'} src={present.src} />
            </Button>
          </>
        );
      })}
    </ListContainer>
  );
};

export default PresentList;

PresentList.propTypes = {
  formData: PropTypes.object,
  onClickPresent: PropTypes.func,
};
