import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FONT, COLOR } from '@styles';

const SwiperStyle = css`
  width: 100%;
  height: 90%;
`;

const SwiperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const LogoText = styled.h1`
  color: ${COLOR.PURPLE_500};
  ${FONT.B_32_HEADING};
  margin-bottom: 14px;
`;

const TitleText = styled.h2`
  text-align: center;
  color: ${COLOR.GRAY_900};
  margin-bottom: 32px;
  ${FONT.SB_18_TITLE};
`;

const BodyText = styled.p`
  color: ${COLOR.GRAY_800};
  text-align: center;
  white-space: pre-wrap;
  margin-top: 32px;
  ${FONT.M_16_BODY};
`;

export { SwiperStyle, SwiperWrapper, LogoText, TitleText, BodyText };
