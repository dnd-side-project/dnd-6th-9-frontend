import styled from '@emotion/styled';
import { FONT, COLOR } from '@styles';
import { Button } from '@components/base';

const ListContainer = styled.div`
  width: 100%;
  ${({ theme }) => theme.common.flexCenterColumn}
`;

const EmptyListContainer = styled.div`
  width: 100%;
  margin-top: 113px;
  padding-top: 32px;
  padding-bottom: 16px;
  ${({ theme }) => theme.common.flexCenterColumn}
`;

const Title = styled.div`
  ${FONT.B_20_TITLE}
  color : ${COLOR.GRAY_900};
  text-align: center;
  margin-bottom: 8px;
`;

const SubTitle = styled.div`
  ${FONT.SB_14_TITLE}
  color : ${COLOR.GRAY_700};
  text-align: center;
`;

const ImageWrapper = styled.div`
  padding: 40px 0;
  width: 185px;
`;

const ButtonStyleMe = styled(Button)`
  width: 100%;
  height: 40px;
  ${FONT.R_14_BODY}
  color : ${COLOR.GRAY_0};
`;

const ButtonStyleScrap = styled(Button)`
  idth: 100%;
  height: 40px;
  ${FONT.R_14_BODY}
  color : ${COLOR.GRAY_900};
`;

const ShareIconWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  margin-right: 8px;
`;
export {
  ListContainer,
  EmptyListContainer,
  Title,
  SubTitle,
  ImageWrapper,
  ShareIconWrapper,
  ButtonStyleMe,
  ButtonStyleScrap,
};
