import styled from '@emotion/styled';
import { FONT } from '@styles';
const BackButtonContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  width: 52px;
  height: 24px;
  cursor: pointer;
`;

const TextWrapper = styled.div`
  width: 28px;
  height: 24px;
  ${FONT.M_16_BODY};
  ${({ theme }) => theme.common.flexCenter}
`;
export { BackButtonContainer, TextWrapper };
