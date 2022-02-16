import { DefaultTemplate } from '@styles';
import { FONT } from '@styles';
import styled from '@emotion/styled';

const OnboardingWrapper = styled(DefaultTemplate)``;

const BottomFixedContainer = styled.div`
  height: 60px;
  padding: 0 16px;
  ${({ theme }) => theme.common.flexCenter};
  ${({ theme }) => theme.common.BottomFixedPosition};
  justify-content: space-between;
`;

const RootButton = styled.button`
  background-color: transparent;
  cursor: pointer;
`;

const LeftSkipText = styled.span`
  ${FONT.R_14_BODY};
`;

const RightNextIcon = styled.i`
  ${({ theme }) => theme.common.flexCenter};
`;

export {
  OnboardingWrapper,
  RootButton,
  BottomFixedContainer,
  LeftSkipText,
  RightNextIcon,
};
