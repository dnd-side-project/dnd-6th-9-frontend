import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { FONT, COLOR } from '@styles';
import { ToastMessage } from '@components/base';

const EventMainContainer = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.common.HeaderInMainPosition};
  margin-bottom: 80px;
  overflow: auto;
`;

const PurpleLogoWrapper = styled.h1``;

const MainTitle = styled.div`
  margin-left: 16px;
  ${FONT.M_24_TITLE}
  color : ${COLOR.GRAY_900};
`;
const BoldText = styled.span`
  ${FONT.B_24_TITLE}
  color : ${COLOR.GRAY_900};
  &.purple {
    color: ${COLOR.PURPLE_500};
  }
`;
const IconContainer = styled.div`
  width: 56px;
  height: 30px;
  margin-left: 8px;
  ${({ theme }) => theme.common.InlineflexCenter};
  justify-content: space-between;
  position: relative;
`;

const fadeOut = keyframes`
from {
  opacity: 1;
}
to {
  opacity: 0;
}
`;

const PopupMessage = styled(ToastMessage)`
  left: -42px;
  top: 40px;
  width: 153px;
  height: 44px;
  padding: 8px;
  color: ${COLOR.GRAY_0};
  ${FONT.M_12_BODY};
  &:after {
    border-top:0px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid ${COLOR.GRAY_800};
    content:"";
    position:absolute;
    top:-9.5px;
`;

const PopupContent = styled.div`
  ${FONT.R_10_BODY};
  text-align: start;
  &.title {
    ${FONT.M_12_BODY};
  }
`;

const ButtonWrapper = styled.div`
  ${({ theme }) => theme.common.BottomFixedPosition};
  ${({ theme }) => theme.common.modalShadow};
  padding: 16px;
  background: ${COLOR.GRAY_0};
  ${FONT.M_16_BODY};
`;

const ButtonStyle = {
  height: '48px',
  width: '100%',
};

export {
  EventMainContainer,
  PurpleLogoWrapper,
  MainTitle,
  IconContainer,
  PopupMessage,
  PopupContent,
  BoldText,
  ButtonWrapper,
  ButtonStyle,
  fadeOut,
};
