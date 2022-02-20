import styled from '@emotion/styled';
import { COLOR, FONT } from '@styles';
import { ReactComponent as SETTING_ICON } from '@assets/icons/setting_icon.svg';
import { ReactComponent as PRESENT_IMAGE } from '@assets/images/menubar_present.svg';
import { ReactComponent as MENU_ICON } from '@assets/icons/menu_icon.svg';
import { ReactComponent as CLOSE_ICON } from '@assets/icons/close_icon.svg';
const MenuIcon = styled(MENU_ICON)``;
const MenuButton = styled.button`
  background-color: transparent;
`;
const BackgroundDim = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${COLOR.GRAY_OPACITY_900};
  z-index: 999;
  display: none;
  &.show {
    display: block;
  }
`;

const MenuWrapper = styled.div`
  position: absolute;
  padding: 100px 28px 0;
  top: 0;
  right: -100vw;
  width: 80%;
  height: 100vh;
  background-color: white;
  z-index: 1000;
  transition: all 0.2s;
  /* visibility: hidden;
  &.show {
    visibility: visible;
    width: 80%;
  }
  &.hide {
    width: 0;
  } */
  &.show {
    right: 0;
  }
  &.hide {
    right: -100vw;
  }
`;

const MenuCloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  background-color: transparent;
`;

const MenuCloseIcon = styled(CLOSE_ICON)``;

const MenuInner = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn}
`;

const MenuPresentImage = styled(PRESENT_IMAGE)`
  margin-bottom: 8px;
`;

const NameBox = styled.div`
  ${({ theme }) => theme.common.flexCenter}
`;

const NameTeck = styled.span`
  ${FONT.B_20_TITLE}
  margin-right: 8px;
`;

const NameChangeIcon = styled(SETTING_ICON)``;

const Spacer = styled.hr`
  height: 1px;
  width: 100%;
  background-color: ${COLOR.GRAY_900};
  margin: 16px 0;
`;

const MenuItemList = styled.ul`
  ${({ theme }) => theme.common.flexCenterColumn}
`;

const MenuItem = styled.li`
  ${FONT.SB_18_TITLE}

  margin-bottom: 18px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export {
  MenuButton,
  MenuIcon,
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
  BackgroundDim,
  Spacer,
};
