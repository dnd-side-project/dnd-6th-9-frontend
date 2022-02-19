import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { FONT, COLOR } from '@styles';

const Background = styled.div`
  height: 100%;
  padding: 16px;
  ${({ theme }) => theme.common.HeaderInMainPosition};
`;

const MessageCreatePageContainer = styled.div`
  height: 100%;
  min-width: 100%;
`;
/**
 * ${({ theme }) => theme.common.flexCenter}
 * flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
 * 

    flex-direction: column;
  justify-content: flex-start;
 */
const LeftHeaderContent = styled.div`
  display: flex;
  align-items: center;
  width: 52px;
  height: 24px;
  cursor: pointer;
`;
const BackText = styled.div`
  width: 28;
  height: 24px;
  ${FONT.M_16_BODY};
  display: flex;
  align-items: center;
`;

const StepTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 0;

  width: 100%;
  height: 78px;
  ${FONT.B_20_TITLE};
  color: ${COLOR.GRAY_900};
`;

/* step 2*/
const TabWrapper = styled.div`
  margin: 16px 0px;
`;

const DayListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 80px;
  justify-content: space-between;
`;

const buttonStyle = css({
  height: '48px',
  width: '100%',
});

const ButtonWrapper = styled.div`
  ${({ theme }) => theme.common.BottomFixedPosition};
  ${({ theme }) => theme.common.modalShadow};
  padding: 16px;
  background: ${COLOR.GRAY_0};
  ${FONT.M_16_BODY};
`;

/* step 2 */
const MessageWithIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & span {
    margin-left: 8px;
  }

  &.warning {
    margin-top: 8px;
    & span {
      ${FONT.R_12_BODY};
      color: ${COLOR.RED_500};
    }
  }
`;

/* step 3 */
const InputContainer = styled.div`
  width: 100%;
  margin-top: 24px;
`;
const SenderInput = styled.div`
  margin: 24px 0;
  & div.title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    & span {
      ${FONT.SB_16_TITLE}
    }
    & div {
      ${FONT.R_14_BODY}
      color: ${COLOR.PURPLE_500}
    }
  }
`;

const PrivateMessageInput = styled.div`
  ${FONT.R_14_BODY}
  margin-bottom: 238px;
  color: ${COLOR.GRAY_900};
  & div.detail {
    margin-top: 8px;
    padding-left: 28px;
    color: ${COLOR.GRAY_700};
    ${FONT.R_12_BODY};
  }
`;

const ImageWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

export {
  Background,
  LeftHeaderContent,
  BackText,
  MessageCreatePageContainer,
  StepTitle,
  TabWrapper,
  DayListContainer,
  ButtonWrapper,
  buttonStyle,
  MessageWithIconWrapper,
  InputContainer,
  SenderInput,
  PrivateMessageInput,
  ImageWrapper,
};
