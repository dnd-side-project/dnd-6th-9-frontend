import styled from '@emotion/styled';
import { COLOR } from '@styles';
import { css, keyframes } from '@emotion/react';
import { MAX_WIDTH } from '@utils/constants';
const fadein = keyframes`
  0% { opacity: 0; } 
  100% {  opacity: 1; }
`;
const fadeout = keyframes`
  0% {  opacity: 1; } 
  100% {  opacity: 0; }
`;

const Wrapper = styled.div`
  z-index: 100;
  position: absolute;
  background-color: ${COLOR.GRAY_800};
  border-radius: 4px;
  text-align: center;
  width: 100%;
  max-width: ${MAX_WIDTH};
  -webkit-animation: ${(props) =>
    props.show
      ? css`
          ${fadein} 0.5s;
        `
      : css`
          ${fadeout} 0.5s 2.5s;
        `};
  animation: ${(props) =>
    props.show
      ? css`
          ${fadein} 0.5s;
        `
      : css`
          ${fadeout} 0.5s;
        `};
  animation-fill-mode: forwards;
`;

export { Wrapper };
