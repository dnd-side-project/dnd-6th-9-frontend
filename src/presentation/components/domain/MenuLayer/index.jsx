import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MENU_LAYER_LIST } from '@utils/constants';
import { useClickAway } from '@hooks';
import {
  MenuButton,
  MenuIcon,
  BackgroundDim,
  MenuWrapper,
  MenuInner,
  MenuCloseBtn,
  MenuCloseIcon,
  MenuPresentImage,
  NameBox,
  NameTeck,
  NameChangeIcon,
  MenuItemList,
  MenuItem,
  Spacer,
} from './style';
const MenuLayer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickAway(() => {
    setIsOpen(false);
  });

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const renderMenuItem = (list) =>
    list.map(({ Text, link }) => (
      <MenuItem key={Text}>
        <Link to={link}>{Text}</Link>
      </MenuItem>
    ));
  return (
    <>
      <MenuButton onClick={handleClick}>
        <MenuIcon />
      </MenuButton>
      <BackgroundDim className={isOpen ? 'show' : ''} />

      <MenuWrapper ref={ref} className={isOpen ? 'show' : 'hide'}>
        <MenuCloseBtn onClick={handleClose}>
          <MenuCloseIcon />
        </MenuCloseBtn>
        <MenuInner>
          <MenuPresentImage />
          <NameBox>
            <NameTeck>{'카카오톡 닉네임'}님</NameTeck>
            <Link to="/">
              <NameChangeIcon />
            </Link>
          </NameBox>
          <Spacer />
          <MenuItemList>{renderMenuItem(MENU_LAYER_LIST)}</MenuItemList>
        </MenuInner>
      </MenuWrapper>
    </>
  );
};

export default MenuLayer;

MenuLayer.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
};
