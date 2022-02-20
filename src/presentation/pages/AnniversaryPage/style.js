import styled from '@emotion/styled';
import { DefaultTemplate, COLOR } from '@styles';
import { ReactComponent as MENU_ICON } from '@assets/icons/menu_icon.svg';

const MenuIcon = styled(MENU_ICON)``;
const MenuButton = styled.button`
  background-color: transparent;
`;

const ContentWrapper = styled(DefaultTemplate)`
  background-color: ${COLOR.GRAY_100};
  flex-direction: column;
  height: auto;
  ${({ theme }) => theme.common.HeaderInMainPosition};
`;

const PurpleLogoWrapper = styled.h1``;

export { ContentWrapper, MenuIcon, MenuButton, PurpleLogoWrapper };
