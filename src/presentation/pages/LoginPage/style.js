import styled from '@emotion/styled';
import { DefaultTemplate, ANIMATION, FONT, COLOR } from '@styles';
import { ReactComponent as Loginbox } from '@assets/images/login_present.svg';

const LoginPageWrapper = styled(DefaultTemplate)`
  flex-direction: column;
`;

const Bouncebox = styled(Loginbox)`
  animation: ${ANIMATION.BOX_BOUNCE_2} 1.5s ease alternate;
`;

const TitleText = styled.h1`
  text-align: center;
  color: ${COLOR.GRAY_900};
  line-height: 42px;
  margin-bottom: 100px;
  ${FONT.B_28_HEADING}
`;

const LoginFormBox = styled.div`
  width: 100%;
`;

const SocialLoginBtn = styled.button`
  ${({ theme }) => theme.common.flexCenter}
  color: ${COLOR.GRAY_900};
  width: 100%;
  height: 48px;
  border-radius: 4px;
  background-color: ${({ bgColor }) => bgColor};
  & + button {
    margin-top: 8px;
  }
`;

const MainNoticeText = styled.h2`
  text-align: center;
  margin-bottom: 24px;
  ${FONT.R_16_BODY}
`;

const SubNoticeText = styled.h3`
  text-align: center;
  margin-top: 16px;
  color: ${COLOR.GRAY_700};
  ${FONT.M_14_BODY}
`;

const BtnIcon = styled.i`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

const BtnText = styled.span`
  ${FONT.M_16_BODY}
`;

const BtnImage = styled.img`
  width: 100%;
  height: 100%;
`;

export {
  LoginPageWrapper,
  Bouncebox,
  SocialLoginBtn,
  TitleText,
  LoginFormBox,
  MainNoticeText,
  SubNoticeText,
  BtnIcon,
  BtnText,
  BtnImage,
};
