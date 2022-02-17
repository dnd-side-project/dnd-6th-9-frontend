import styled from '@emotion/styled';
import { ReactComponent as Logo_Box } from '@assets/images/logo/logo_Box.svg';
import { ReactComponent as Logo_white } from '@assets/images/logo/logo_white.svg';
import { COLOR, FONT, DefaultTemplate, ANIMATION } from '@styles';

const SplashScreenWrapper = styled(DefaultTemplate)`
  flex-direction: column;
  background-color: ${COLOR.PURPLE_500};
  color: ${COLOR.GRAY_0};
`;

const FirstBounce = styled.div`
  transform: scale(0);
  margin-bottom: 20px;
  animation: ${ANIMATION.FIRST_BOX_BOUNCE} 0.7s ease alternate forwards 0.5s;
`;

const BounceBox = styled(Logo_Box)`
  animation: ${ANIMATION.BOX_BOUNCE} 1s ease infinite 1.4s;
`;

const BounceLogo = styled(Logo_white)`
  margin-bottom: 16px;
`;

const ContentBox = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  animation: ${ANIMATION.LOGO_BOUNCE} 0.5s ease alternate;
`;

const SubTitle = styled.h2`
  color: ${COLOR.GRAY_0};
  text-align: center;
  ${FONT.SB_18_TITLE};
`;

export {
  SplashScreenWrapper,
  FirstBounce,
  BounceBox,
  BounceLogo,
  ContentBox,
  SubTitle,
};
