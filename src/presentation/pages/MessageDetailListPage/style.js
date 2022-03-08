import styled from '@emotion/styled';
import { COLOR } from '@styles';
const Background = styled.div`
  ${({ theme }) => theme.common.HeaderInMainPosition}
  margin-bottom: 46px;
  height: 100%;
  overflow: auto;
`;

const Footer = styled.div`
  ${({ theme }) => theme.common.BottomFixedPosition}
  height:46px;
  z-index: 5;
  background-color: ${COLOR.WHITE};
`;

export { Background, Footer };
