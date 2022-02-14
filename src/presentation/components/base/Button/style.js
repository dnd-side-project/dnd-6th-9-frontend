import styled from '@emotion/styled';
import { COLOR } from '@styles';

const BUTTON_BACKGROUND_COLOR = {
  PRIMARY: {
    DEFAULT: COLOR.PURPLE_500,
    HOVER: COLOR.PURPLE_600,
    PRESS: COLOR.PURPLE_700,
    DISABLED: COLOR.PURPLE_500,
  },
  SECONDARY: {
    DEFAULT: COLOR.GRAY_300,
    HOVER: COLOR.GRAY_500,
    PRESS: COLOR.GRAY_700,
    DISABLED: COLOR.GRAY_300,
  },
  DANGER: {
    DEFAULT: COLOR.WHITE,
    HOVER: COLOR.RED_100,
    PRESS: COLOR.RED_300,
    DISABLED: COLOR.WHITE,
  },
  SELECT: {
    DEFAULT: COLOR.WHITE,
    HOVER: COLOR.GRAY_100,
    PRESS: COLOR.WHITE,
    DISABLED: COLOR.WHITE,
  },
};

const BUTTON_LINE_COLOR = {
  DANGER: {
    DEFAULT: COLOR.RED_500,
    HOVER: COLOR.RED_500,
    PRESS: COLOR.RED_500,
    DISABLED: COLOR.RED_500,
  },
  SELECT: {
    DEFAULT: COLOR.GRAY_300,
    HOVER: COLOR.GRAY_500,
    PRESS: COLOR.PURPLE_500,
    DISABLED: COLOR.GRAY_300,
  },
};

const BUTTON_TEXT_COLOR = {
  PRIMARY: {
    DEFAULT: COLOR.WHITE,
    HOVER: COLOR.WHITE,
    PRESS: COLOR.WHITE,
    DISABLED: COLOR.WHITE,
  },
  SECONDARY: {
    DEFAULT: COLOR.GRAY_900,
    HOVER: COLOR.GRAY_900,
    PRESS: COLOR.GRAY_900,
    DISABLED: COLOR.GRAY_900,
  },
  DANGER: {
    DEFAULT: COLOR.RED_500,
    HOVER: COLOR.RED_500,
    PRESS: COLOR.RED_500,
    DISABLED: COLOR.RED_500,
  },
  SELECT: {
    DEFAULT: COLOR.GRAY_900,
    HOVER: COLOR.GRAY_900,
    PRESS: COLOR.PURPLE_500,
    DISABLED: COLOR.GRAY_900,
  },
};

const BUTTON_TEXT_SIZE = {
  S: '12px',
  M: '14px',
  L: '16px',
};

const ButtonContainer = styled.button(
  {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px 16px',
    borderRadius: '4px',

    fontFamily: `'SUIT', sans-serif`,
    fontStyle: 'normal',
    fontWeight: '500',
    letterSpacing: '0px',
    testAlign: 'left',
    lineHeight: '150%',
  },
  (props) => ({
    width: props.size === 'M' ? '80px' : '85px',
    height: props.size === 'M' ? '40px' : '48px',
    fontSize: BUTTON_TEXT_SIZE[props.size],
    color: BUTTON_TEXT_COLOR[props.type]['DEFAULT'],
    opacity: props.disabled ? '0.2' : 'none',
    background: BUTTON_BACKGROUND_COLOR[props.type]['DEFAULT'],
    border: BUTTON_LINE_COLOR[props.type]
      ? `1px solid ${BUTTON_LINE_COLOR[props.type]['DEFAULT']}`
      : 'none',
    boxSizing: BUTTON_LINE_COLOR[props.type] ? 'border-box' : '',
    '&:hover': props.disabled
      ? 'none'
      : {
          backgroundColor: BUTTON_BACKGROUND_COLOR[props.type]['HOVER'],
          border: BUTTON_LINE_COLOR[props.type]
            ? `1px solid ${BUTTON_LINE_COLOR[props.type]['HOVER']}`
            : 'none',
          color: BUTTON_TEXT_COLOR[props.type]['HOVER'],
        },
    '&:active': props.disabled
      ? 'none'
      : {
          backgroundColor: BUTTON_BACKGROUND_COLOR[props.type]['PRESS'],
          border: BUTTON_LINE_COLOR[props.type]
            ? `1px solid ${BUTTON_LINE_COLOR[props.type]['PRESS']}`
            : `1px solid ${BUTTON_LINE_COLOR[props.type]}`,
          color: BUTTON_TEXT_COLOR[props.type]['PRESS'],
        },
  }),
);

export { ButtonContainer };
