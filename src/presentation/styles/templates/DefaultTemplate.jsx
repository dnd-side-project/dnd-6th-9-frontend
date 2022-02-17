import styled from '@emotion/styled';

const DefaultTemplate = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
  ${({ theme }) => theme.common.flexCenter}
`;

export default DefaultTemplate;
