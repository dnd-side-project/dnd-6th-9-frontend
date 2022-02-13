import styled from '@emotion/styled';
import { COLOR } from '@styles';

const BadgeContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Super = styled.sup`
  ${({ theme }) => theme.common.InlineflexCenter}
  position: absolute;
  top: 0;
  right: 0;
  height: 20px;
  padding: 0 8px;
  font-size: 12px;
  border-radius: 20px;
  color: white;
  transform: translate(50%, -50%);
  background-color: ${COLOR.RED_500};
  &.dot {
    padding: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
`;

export { BadgeContainer, Super };
