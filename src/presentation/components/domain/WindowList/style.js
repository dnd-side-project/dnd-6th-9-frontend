import { css } from '@emotion/react';
import styled from '@emotion/styled';
import school_middle from '@assets/images/schoolTheme/school_middle.png';
import { COLOR, FONT } from '@styles';
import { MAX_WIDTH } from '@utils/constants';

const ThemeMiddle = styled.div`
  width: 100%;
  aspect-ratio: 360/150;
  background: url(${school_middle}) no-repeat;
  background-size: cover;
  margin-bottom: -1.5px;
  ${({ theme }) => theme.common.flexCenter};
  justify-content: space-around;
`;

const WindowWrapper = styled.div`
  width: 28%;
  aspect-ratio: 98/142;
`;

const TitleContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  margin-top: 3px;
`;

const DayText = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  ${FONT.SB_14_TITLE}
  color : ${COLOR.GRAY_900};
  &.open {
    color: ${COLOR.GRAY_700};
  }
  &.close {
    color: ${COLOR.PURPLE_500};
  }
`;

const badgeStyle = css`
  margin-left: 20%;
`;

const ImageWrapper = styled.div`
  cursor: pointer;
`;

const ModalStyle = css`
  border-radius: 4px;
  max-width: ${MAX_WIDTH};
`;

const ImageStyle = styled.div`
  position: absolute;
  bottom: 75%;
  &.congrats {
    left: 40%;
  }
`;

const ModalContainer = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  justify-content: flex-start;
  padding-top: 45px;
`;
const ModalTitle = styled.div`
  ${FONT.B_20_TITLE}
  color : ${COLOR.GRAY_900};
  margin-bottom: 8px;
`;
const ModalSubTitle = styled.div`
  text-align: center;
  ${FONT.R_16_BODY}
  color : ${COLOR.GRAY_700};
`;

const ModalButtonStyle = {
  marginTop: '16px',
  height: '48px',
};
export {
  ThemeMiddle,
  WindowWrapper,
  TitleContainer,
  DayText,
  badgeStyle,
  ImageWrapper,
  ModalStyle,
  ImageStyle,
  ModalContainer,
  ModalTitle,
  ModalSubTitle,
  ModalButtonStyle,
};
