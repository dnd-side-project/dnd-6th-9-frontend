import { useMemo, useEffect } from 'react';
import { BackgroundDim, ModalContainer } from './style';
import ReactDOM from 'react-dom';
import Lottie from 'lottie-react';
import confettieAnimation from '@assets/lottie/confetti.json';

const ConfettieLottie = () => {
  const el = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  });

  return ReactDOM.createPortal(
    <BackgroundDim>
      <ModalContainer>
        <Lottie
          animationData={confettieAnimation}
          loop={false}
          autoplay={true}
        />
      </ModalContainer>
    </BackgroundDim>,
    el,
  );
};

export default ConfettieLottie;
