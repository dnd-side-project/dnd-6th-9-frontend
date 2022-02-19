import styled from '@emotion/styled';
import { COLOR } from '@styles';

const BUTTON_BACKGROUND_COLOR = {
  PRIMARY: {
    DEFAULT: COLOR.PURPLE_500,
    HOVER: COLOR.PURPLE_600,
    PRESS: COLOR.PURPLE_700,
    DISABLED: COLOR.PURPLE_400,
  },
  SECONDARY: {
    DEFAULT: COLOR.GRAY_300,
    HOVER: COLOR.GRAY_500,
    PRESS: COLOR.GRAY_700,
    DISABLED: COLOR.GRAY_100,
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

const ButtonWrapper = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  width: 100%;

  font-family: 'SUIT', sans-serif;
  font-style: normal;
  text-align: left;
  line-height: 150%;

  background-color: ${BUTTON_BACKGROUND_COLOR['PRIMARY']['DEFAULT']};

  &.primary {
    background-color: ${BUTTON_BACKGROUND_COLOR['PRIMARY']['DEFAULT']};
    color: ${BUTTON_TEXT_COLOR['PRIMARY']['DEFAULT']};

    &:hover {
      background-color: ${BUTTON_BACKGROUND_COLOR['PRIMARY']['HOVER']};
      color: ${BUTTON_TEXT_COLOR['PRIMARY']['HOVER']};
    }

    &:active {
      background-color: ${BUTTON_BACKGROUND_COLOR['PRIMARY']['PRESS']};
      color: ${BUTTON_TEXT_COLOR['PRIMARY']['PRESS']};
    }

    &:disabled {
      background-color: ${BUTTON_BACKGROUND_COLOR['PRIMARY']['DISABLED']};
    }
  }

  &.secondary {
    background-color: ${BUTTON_BACKGROUND_COLOR['SECONDARY']['DEFAULT']};
    color: ${BUTTON_TEXT_COLOR['SECONDARY']['DEFAULT']};

    &:hover {
      background-color: ${BUTTON_BACKGROUND_COLOR['SECONDARY']['HOVER']};
      color: ${BUTTON_TEXT_COLOR['SECONDARY']['HOVER']};
    }

    &:active {
      background-color: ${BUTTON_BACKGROUND_COLOR['SECONDARY']['PRESS']};
      color: ${BUTTON_TEXT_COLOR['SECONDARY']['PRESS']};
    }
    &:disabled {
      background-color: ${BUTTON_BACKGROUND_COLOR['SECONDARY']['DISABLED']};
    }
  }

  &.danger {
    background-color: ${BUTTON_BACKGROUND_COLOR['DANGER']['DEFAULT']};
    color: ${BUTTON_TEXT_COLOR['DANGER']['DEFAULT']};
    border: 1px solid ${BUTTON_LINE_COLOR['DANGER']['DEFAULT']};
    box-sizing: border-box;

    &:hover {
      background-color: ${BUTTON_BACKGROUND_COLOR['DANGER']['HOVER']};
      color: ${BUTTON_TEXT_COLOR['DANGER']['HOVER']};
    }

    &:active {
      background-color: ${BUTTON_BACKGROUND_COLOR['DANGER']['PRESS']};
      color: ${BUTTON_TEXT_COLOR['DANGER']['PRESS']};
    }
  }

  &.select {
    background-color: ${BUTTON_BACKGROUND_COLOR['SELECT']['DEFAULT']};
    color: ${BUTTON_TEXT_COLOR['SELECT']['DEFAULT']};
    border: 1px solid ${BUTTON_LINE_COLOR['SELECT']['DEFAULT']};
    box-sizing: border-box;

    &:hover {
      background-color: ${BUTTON_BACKGROUND_COLOR['SELECT']['HOVER']};
      border: 1px solid ${BUTTON_LINE_COLOR['SELECT']['HOVER']};
      color: ${BUTTON_TEXT_COLOR['SELECT']['HOVER']};
    }

    &:active {
      background-color: ${BUTTON_BACKGROUND_COLOR['SELECT']['PRESS']};
      border: 1px solid ${BUTTON_LINE_COLOR['SELECT']['PRESS']};
      color: ${BUTTON_TEXT_COLOR['SELECT']['PRESS']};
    }
    &:disabled {
      background-color: ${BUTTON_BACKGROUND_COLOR['SELECT']['DISABLED']};
      opacity: 0.3;
    }
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.3;
  }
`;

export { ButtonWrapper };
