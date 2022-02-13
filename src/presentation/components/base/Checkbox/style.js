import { animated } from 'react-spring';
import { COLOR, FONT } from '@styles';
import styled from '@emotion/styled';
import { CHECK_BOX_SIZE } from '@utils/constants';

const Container = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

const CheckboxInput = styled.input`
  clip: rect(0, 0, 0, 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const CheckboxLabel = styled(animated.svg)`
  display: inline-block;
  height: ${CHECK_BOX_SIZE};
  width: ${CHECK_BOX_SIZE};
  background-color: ${COLOR.GRAY_0};
  border: 2px solid ${COLOR.GRAY_200};
  border-radius: 4px;
  margin-right: 8px;
  vertical-align: middle;
`;

const LabelText = styled.span`
  vertical-align: middle;
  ${FONT.R_BODY_16};
`;

export { Container, CheckboxInput, CheckboxLabel, LabelText };
