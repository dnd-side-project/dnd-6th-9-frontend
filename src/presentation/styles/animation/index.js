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
  BOX_BOUNCE_2: keyframes`
    70% { transform:translateY(0); }
    80% { transform:translateY(-13%); }
    90% { transform:translateY(0%); }
    95% { transform:translateY(-3%); }
    97% { transform:translateY(0%); }
    99% { transform:translateY(-4%); }
    100% { transform:translateY(-2%); }
    `,
};

export default ANIMATION;
