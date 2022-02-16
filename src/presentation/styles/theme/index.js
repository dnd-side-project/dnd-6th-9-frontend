import { COLOR } from '@styles';
import { css } from '@emotion/react';
import { MAX_WIDTH } from '@utils/constants';
export const common = {
  BottomFixedPosition: css`
    max-width: ${MAX_WIDTH};
    margin: 0 auto;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  `,

  modalShadow: css`
    box-shadow: ${COLOR.MODAL_SHADOW} 0px 8px 24px 0px;
  `,
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
  InlineflexCenter: css`
    display: inline-flex;
    align-items: center;
  `,
  HeaderFixedPosition: css`
    max-width: ${MAX_WIDTH};
    margin: 0 auto;
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
