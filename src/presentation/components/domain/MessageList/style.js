import styled from '@emotion/styled';
import { DefaultTemplate, FONT, COLOR } from '@styles';

const Container = styled(DefaultTemplate)`
  margin-top: 31px;
  ${({ theme }) => theme.common.flexCenterColumn};
  justify-content: start;
`;

const Title = styled.div`
  ${FONT.B_20_TITLE}
  color: ${COLOR.GRAY_900};
  margin-bottom: 24px;
`;

export { Container, Title };
