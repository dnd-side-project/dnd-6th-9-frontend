import { css } from '@emotion/react';
const getFontWeight = (weight) => {
  // 400 - R(regular), 500: M(Medium), 600: SB(semi bold), 700 : B(bold)
  switch (weight) {
    case 'M':
      return 500;
    case 'SB':
      return 600;
    case 'B':
      return 700;
    case 'R':
    default:
      return 400;
  }
};

const getLetterSpacing = (position) => {
  switch (position) {
    case 'Body':
      return '0px';
    case 'Title':
    case 'Heading':
      return '-0.02em';
  }
};

export const FONT = ({ size, weight, position }) => css`
  font-size: ${size}px;
  font-weight: ${getFontWeight(weight)};
  letter-spacing: ${getLetterSpacing(position)};
`;

const FONT_STYLES = {
  B_32_HEADING: FONT({ size: 32, weight: 'B', position: 'Heading' }),
  B_28_HEADING: FONT({ size: 28, weight: 'B', position: 'Heading' }),
  B_24_TITLE: FONT({ size: 24, weight: 'B', position: 'Title' }),
  M_24_TITLE: FONT({ size: 24, weight: 'M', position: 'Title' }),
  B_20_TITLE: FONT({ size: 20, weight: 'B', position: 'Title' }),
  SB_18_TITLE: FONT({ size: 18, weight: 'SB', position: 'Title' }),
  SB_16_TITLE: FONT({ size: 16, weight: 'SB', position: 'Title' }),
  SB_14_TITLE: FONT({ size: 14, weight: 'SB', position: 'Title' }),
  SB_12_TITLE: FONT({ size: 12, weight: 'SB', position: 'Title' }),
  M_16_BODY: FONT({ size: 16, weight: 'M', position: 'Body' }),
  R_16_BODY: FONT({ size: 16, weight: 'R', position: 'Body' }),
  M_14_BODY: FONT({ size: 14, weight: 'M', position: 'Body' }),
  R_14_BODY: FONT({ size: 14, weight: 'R', position: 'Body' }),
  M_12_BODY: FONT({ size: 12, weight: 'M', position: 'Body' }),
  R_12_BODY: FONT({ size: 12, weight: 'R', position: 'Body' }),
  R_10_BODY: FONT({ size: 10, weight: 'R', position: 'Body' }),
};

export default FONT_STYLES;
