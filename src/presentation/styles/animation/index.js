import { keyframes } from '@emotion/react';

const ANIMATION = {
  FIRST_BOX_BOUNCE: keyframes`
    from {
        transform: scale(0); 
    }
    to{
        transform: scale(1);
    }
    `,

  BOX_BOUNCE: keyframes`
        40%, 60% { 
            transform: rotate(-20deg)  
        }
        50% { 
            transform: rotate(20deg)
        }
        70% { 
            transform: rotate(0deg)
        }
        100% { 
            transform: scale(1); 
        }
    `,
  LOGO_BOUNCE: keyframes`
        0% {
            opacity: 0;
            transform: translateX(-30px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    `,
};

export default ANIMATION;
