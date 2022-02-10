import { COLOR } from '@styles';
import { css } from '@emotion/react';
export const common = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexCenterColumn: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};

export const light = {
  colors: {
    bgColor: COLOR.GRAY_0,
    textColor: COLOR.GRAY_900,
    borderColor: COLOR.GRAY_300,
  },
  common,
};

const theme = {
  light,
};

export default theme;
