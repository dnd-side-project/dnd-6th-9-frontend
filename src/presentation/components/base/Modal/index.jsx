import { useMemo, useEffect } from 'react';
import { useClickAway } from '@hooks';
import { ModalContainer, BackgroundDim } from './style';
import ReactDOM from 'react-dom';

const Modal = ({ children, width, height, visible, onClose, ...props }) => {
  const ref = useClickAway(() => {
    onClose && onClose();
  });
  const el = useMemo(() => document.createElement('div'), []);
  const containerStyle = useMemo(
    () => ({
      width,
      height,
    }),
    [width, height],
  );

  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  });

  return ReactDOM.createPortal(
    <BackgroundDim style={{ display: visible ? 'block' : 'none' }}>
      <ModalContainer
        ref={ref}
        {...props}
        style={{ ...props.style, ...containerStyle }}
      >
        {children}
      </ModalContainer>
    </BackgroundDim>,
    el,
  );
};

export default Modal;
