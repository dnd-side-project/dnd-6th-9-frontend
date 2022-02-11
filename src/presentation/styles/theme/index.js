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
  HeaderFixedPosition: css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  `,
  HeaderInMainPosition: css`
    padding-top: 40px;
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
