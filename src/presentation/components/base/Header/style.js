import styled from '@emotion/styled';
import { MAX_WIDTH } from '@utils/constants';
const RootHeaderWrapper = styled.div`
  max-width: ${MAX_WIDTH};
  margin: 0 auto;
  padding: 0 16px;
  z-index: 5;
  background-color: ${({ theme }) => theme.colors.bgColor};
  ${({ theme }) => theme.common.HeaderFixedPosition}};
`;

const RootHeader = styled.header`
  ${({ theme }) => theme.common.flexCenter};
  height: 56px;
`;

const Content = styled.div`
    display: flex;
    flex: 1;
    justify-content: ${({ align }) => align}};
`;

export { Content, RootHeader, RootHeaderWrapper };
