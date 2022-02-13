import styled from '@emotion/styled';
import { COLOR } from '@styles';

const BackgroundDim = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${COLOR.GRAY_OPACITY_900};
  z-index: 1000;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${COLOR.WHITE};
  box-sizing: border-box;
  padding: 24px 16px;
  box-shadow: ${COLOR.MODAL_SHADOW} 0px 8px 24px 0px;
`;

export { BackgroundDim, ModalContainer };
