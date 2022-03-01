import styled from '@emotion/styled';
import { DefaultTemplate } from '@styles';

const Background = styled(DefaultTemplate)`
  ${({ theme }) => theme.common.HeaderInMainPosition};
  ${({ theme }) => theme.common.flexCenterColumn};
  justify-content: start;
`;

const TabWrapper = styled.div`
  width: 100%;
  margin-top: 16px;
`;

export { Background, TabWrapper };
