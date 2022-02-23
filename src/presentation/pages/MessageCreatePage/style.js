import styled from '@emotion/styled';
import { FONT, COLOR } from '@styles';
import { ReactComponent as Error_Icon } from '@assets/icons/error_icon.svg';
import { css } from '@emotion/react';

const Background = styled.div`
  height: 100%;
  padding: 16px;
  ${({ theme }) => theme.common.HeaderInMainPosition};
  overflow: auto;
  padding-bottom: 80px;
`;

const MessageCreatePageContainer = styled.div`
  width: 100%;
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

const DayListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4.5%;
  padding-bottom: 80px;
`;

const DayButtonStyle = {
  aspectRatio: '98/120',
  margin: '0 auto',
};

const TabWrapper = styled.div`
  margin: 16px 0px;
`;

const buttonStyle = {
  height: '48px',
  width: '100%',
};

const ButtonWrapper = styled.div`
  ${({ theme }) => theme.common.BottomFixedPosition};
  ${({ theme }) => theme.common.modalShadow};
  padding: 16px;
  background: ${COLOR.GRAY_0};
  ${FONT.M_16_BODY};
`;

const ErrorIcon = styled(Error_Icon)`
  height: 16px;
  width: 16px;
`;

const WarningMessage = styled.div`
  ${FONT.R_12_BODY};
  color: ${COLOR.RED_500};
`;

const MessageWithIconWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  &.warningMsg {
    padding-top: 8px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  margin-top: 24px;
`;

const ButtonText = styled.div`
  ${FONT.R_14_BODY};
  color: ${COLOR.GRAY_900};
  text-align: center;
`;

const InputTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SenderInput = styled.div`
  margin: 24px 0;
`;

const SenderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  ${FONT.SB_16_TITLE}
`;

const EditText = styled.div`
  ${FONT.R_14_BODY}
  color: ${COLOR.PURPLE_500};
  margin-right: 0px;
`;

const PrivateMessageInput = styled.div`
  ${FONT.R_14_BODY}
  margin-bottom: 238px;
  color: ${COLOR.GRAY_900};
`;

const PrivateMsgText = styled.div`
  ${FONT.R_14_BODY}
  margin-bottom: 238px;
  color: ${COLOR.GRAY_900};
  margin-top: 8px;
  padding-left: 28px;
  color: ${COLOR.GRAY_700};
  ${FONT.R_12_BODY};
`;

const ImageWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const UploadStyle = { width: '100%' };

const ButtonStyle = {
  width: '100%',
  height: '36px',
  marginTop: '8px',
  display: 'flex',
  alignItems: 'center',
};

const TextAreaStyle = styled.div`
  margin-top: 8px;
`;

const ToastStyle = css`
  top: 70%;
  left: 10%;
`;

export {
  Background,
  MessageCreatePageContainer,
  StepTitle,
  DayButtonStyle,
  TabWrapper,
  DayListContainer,
  ButtonWrapper,
  buttonStyle,
  ErrorIcon,
  WarningMessage,
  MessageWithIconWrapper,
  InputContainer,
  SenderInput,
  PrivateMessageInput,
  ImageWrapper,
  UploadStyle,
  ButtonStyle,
  TextAreaStyle,
  ButtonText,
  SenderTitle,
  EditText,
  InputTitleWrapper,
  PrivateMsgText,
  ToastStyle,
};
