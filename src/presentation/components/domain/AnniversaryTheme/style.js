import styled from '@emotion/styled';
import { ReactComponent as ARROW_RIGHT } from '@assets/images/arrow_right.svg';
import { COLOR, FONT } from '@styles';
const Wrapper = styled.section`
  width: 100%;
  margin-top: 16px;
  * + & {
    margin-top: 40px;
  }
`;

const HeaderBox = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  ${FONT.B_20_TITLE}
  color: ${COLOR.GRAY_900};
`;

const ViewAllText = styled.span`
  ${({ theme }) => theme.common.flexCenter}
  color: ${COLOR.GRAY_700};
  ${FONT.SB_14_BODY}
`;

const ArrowRightIcon = styled(ARROW_RIGHT)`
  width: 7px;
  height: 12px;
  margin-left: 4px;
`;

const ContentBox = styled.div`
  ${({ theme }) => theme.common.flexCenter}
`;

export { HeaderBox, Title, ViewAllText, Wrapper, ArrowRightIcon, ContentBox };
