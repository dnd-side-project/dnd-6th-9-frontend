import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { FONT, COLOR } from '@styles';
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
  position: relative;
  display: inline-block;
`;

const fadeOut = keyframes`
from {
  opacity: 1;
}
to {
  opacity: 0;
}
`;

const PopupMessage = styled.div`
  position: absolute;
  left: 15px;
  animation: ${fadeOut} 3s;
  animation-fill-mode: forwards;
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
  BoldText,
  ButtonWrapper,
  ButtonStyle,
  fadeOut,
};
