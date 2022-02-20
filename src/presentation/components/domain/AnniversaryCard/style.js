import styled from '@emotion/styled';
import SCHOOL_THEME from '@assets/images/school_main_theme.png';
import PRESENT_IMAGE from '@assets/images/main_present_box.png';
import { COLOR, FONT } from '@styles';
// import { PRESENT_ICON_SIZE } from '@utils/constants';
import { css } from '@emotion/react';
const ButtonWrapper = styled.button`
  ${({ theme }) => theme.common.flexCenter}
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  margin: 0;
`;

const Wrapper = styled.div`
  width: 100%;
  min-width: 300px;
  height: 360px;
  background-color: ${COLOR.GRAY_0};
  border-radius: 4px;
`;

const ContentCardBox = styled.div`
  width: 100%;
  height: 60%;
  background-color: ${COLOR.GRAY_800};
  padding: 16px 16px 0;
  border-radius: 4px 4px 0 0;
  position: relative;
`;

const ContentHeader = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  justify-content: space-between;
  margin-bottom: 8px;
`;

const TargetDateBox = styled.span`
  ${FONT.R_12_BODY}
  color: ${COLOR.GRAY_0};
`;

const ContentTitle = styled.div`
  ${FONT.B_16_TITLE}
  color: ${COLOR.GRAY_0};
  line-height: 24px;
  text-align: center;
`;

const ThemeImageBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 16px;
  right: 16px;
  height: 130px;
  background: url(${SCHOOL_THEME}) no-repeat;
  background-size: contain;
  background-position: center;
`;

const PresentBox = styled.div`
  width: 100%;
  height: 40%;
  padding: 16px;
  background-color: ${COLOR.GRAY_0};
  border-radius: 0 0 4px 4px;
  position: relative;
`;

const PresentBoxHeader = styled.h3`
  color: ${COLOR.GRAY_900};
  ${FONT.SB_16_TITLE}
  margin-bottom: 4px;
  display: flex;
  gap: 4px;
`;

const PresentBoxText = styled.p`
  color: ${COLOR.GRAY_700};
  ${FONT.R_14_BODY}
`;

const PresentListBox = styled.ul`
  width: 100%;
  height: 66px;
  ${({ theme }) => theme.common.flexCenter}
  justify-content: flex-start;
  gap: 4px;
`;

const PresentItemBox = styled.li`
  list-style: none;
  width: calc(20% - 4px);
  height: 100%;
  text-align: center;
  ${FONT.R_12_BODY}
`;

const PresentItemTitle = styled.span`
  font-size: 10px;
  color: ${COLOR.GRAY_700};
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const PresentItemIcon = css`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const wrapperStyle = css`
  padding: 32px 16px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const titleStyle = css`
  color: ${COLOR.GRAY_900};
  ${FONT.B_20_TITLE}
  margin-bottom: 8px;
`;

const textStyle = css`
  text-align: center;
  margin-bottom: 56px;
`;

const NumberBadge = styled.span`
  ${({ theme }) => theme.common.flexCenter}
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  border-radius: 60px;
  background-color: ${COLOR.RED_500};
  color: ${COLOR.GRAY_0};
  ${FONT.R_12_BODY}
`;

const ShareButtonStyle = {
  position: 'absolute',
  bottom: '16px',
  left: '16px',
  right: '16px',
  gap: '8px',
  width: 'initial',
  height: '40px',
};

export {
  Wrapper,
  ContentCardBox,
  ContentHeader,
  TargetDateBox,
  ContentTitle,
  PresentBox,
  ThemeImageBox,
  PresentBoxHeader,
  PresentBoxText,
  ShareButtonStyle,
  ButtonWrapper,
  PresentListBox,
  PresentItemBox,
  PresentItemIcon,
  PresentItemTitle,
  wrapperStyle,
  titleStyle,
  textStyle,
  PRESENT_IMAGE,
  NumberBadge,
};
