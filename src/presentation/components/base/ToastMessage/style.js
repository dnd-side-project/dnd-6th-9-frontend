import styled from '@emotion/styled';
import { COLOR } from '@styles';
import { css, keyframes } from '@emotion/react';

const fadein = keyframes`
  0% { opacity: 0; } 
  100% {  opacity: 1; }
`;
const fadeout = keyframes`
  0% {  opacity: 1; } 
  100% {  opacity: 0; }
`;

const Wrapper = styled.div`
  z-index: 1000;
  position: fixed;
  bottom: 20%;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: ${COLOR.GRAY_900};
  height: 40px;
  border-radius: 4px;
  text-align: center;
  line-height: 40px;
  color: white;
  width: 80%;
  max-width: 350px;
  font-size: 16px;
  pointer-events: none;
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
