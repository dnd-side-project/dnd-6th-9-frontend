import styled from '@emotion/styled';
import { FONT, COLOR } from '@styles';
const Background = styled.div`
  ${({ theme }) => theme.common.HeaderInMainPosition};
  height: 100%;
  padding: 16px;
  padding-top: 56px;
`;

const Spacer = styled.div`
  height: 158px;
`;

const TitleContainer = styled.div`
  height: 92px;
  margin-bottom: 34px;
  ${({ theme }) => theme.common.flexCenterColumn};
`;

const MainTitle = styled.div`
  height: 36px;
  ${FONT.B_24_TITLE};
  color: ${COLOR.GRAY_900};
  padding-bottom: 8px;
`;
const SubTitle = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  ${FONT.R_16_BODY};
  color: ${COLOR.GRAY_700};
`;

const InputWrapper = styled.div`
  height: 29px;
`;

const ButtonWrapper = styled.div`
  ${({ theme }) => theme.common.BottomFixedPosition};
  ${({ theme }) => theme.common.modalShadow};
  padding: 16px;
  background: ${COLOR.GRAY_0};
  ${FONT.M_16_BODY};
`;

const Message = styled.div`
  margin-top: 8px;
  padding-left: 10px;
  height: 18px;
  ${FONT.R_12_BODY};
  color: ${COLOR.GRAY_700};

  &.duplicate {
    color: ${COLOR.RED_500};
  }
`;

export {
  Background,
  Spacer,
  TitleContainer,
  MainTitle,
  SubTitle,
  InputWrapper,
  ButtonWrapper,
  Message,
};
