import styled from '@emotion/styled';
import { MAX_WIDTH } from '@utils/constants';

const BackgroundDim = styled.div`
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  pointer-events: none;
`;

const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  max-width: ${MAX_WIDTH};
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export { BackgroundDim, ModalContainer };
