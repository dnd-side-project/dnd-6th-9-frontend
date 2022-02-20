import styled from '@emotion/styled';
import { COLOR, FONT } from '@styles';
const Wrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  width: 45px;
  height: 20px;
  border-radius: 60px;
  background-color: transparent;
  color: ${COLOR.GRAY_500};
  border: 1px solid ${COLOR.GRAY_500};
  &.progress {
    background-color: ${COLOR.PURPLE_500};
    color: ${COLOR.GRAY_0};
    border: none;
  }
`;

const Text = styled.span`
  ${FONT.R_12_BODY}
`;

export { Wrapper, Text };
