import styled from '@emotion/styled';
import { FONT, COLOR } from '@styles';
//M_24_TITLE
const IconContainer = styled.div`
  display: flex;
`;
const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.bgColor};
  ${({ theme }) => theme.common.HeaderInMainPosition};
`;

const MainBoard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px 0px;
  align-items: flex-start;
`;
const MainText = styled.p`
  ${FONT.M_24_TITLE}
  & span {
    ${FONT.B_24_TITLE}
  }
  & span.day {
    color: ${COLOR.PURPLE_500};
  }
`;

export { Background, MainBoard, MainText, IconContainer };
