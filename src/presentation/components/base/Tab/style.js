import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { COLOR, FONT } from '@styles';

const NavLinkContainer = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
`;

const MarginWrapper = styled.div`
  width: 100%;
  display: flex;
  &.depth3 {
    width: 50%;
  }
`;

const SpaceWrapper = styled.div`
  width: 50%;
  border-bottom: 2px solid ${COLOR.GRAY_300};
`;

const NavLinkWrapper = styled(NavLink)`
  width: 50%;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLOR.GRAY_500};
  font-style: normal;
  border-bottom: 2px solid ${COLOR.GRAY_300};
  &.activeTab {
    color: ${COLOR.GRAY_900};
    border-bottom: 2px solid ${COLOR.PURPLE_500};
  }
  ${FONT.SB_18_TITLE}
`;

const ListWrapper = styled.div`
  width: 95%;
  margin: 0px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const EventWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export {
  NavLinkContainer,
  NavLinkWrapper,
  ListWrapper,
  EventWrapper,
  MarginWrapper,
  SpaceWrapper,
};
