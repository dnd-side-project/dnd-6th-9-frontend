import styled from '@emotion/styled';
import { COLOR } from '@styles';

const FILTER = {
  '#1B202C':
    'invert(10%) sepia(31%) saturate(644%) hue-rotate(183deg) brightness(92%) contrast(92%)',
  '#8C93A5':
    'invert(63%) sepia(8%) saturate(559%) hue-rotate(185deg) brightness(91%) contrast(94%)',
  '#A1ADC0':
    'invert(81%) sepia(16%) saturate(308%) hue-rotate(178deg) brightness(84%) contrast(85%)',
  '#E3E8F0':
    'invert(95%) sepia(2%) saturate(1301%) hue-rotate(188deg) brightness(101%) contrast(88%)',
  '#F3F6F8':
    'invert(84%) sepia(6%) saturate(87%) hue-rotate(162deg) brightness(115%) contrast(96%)',
  '#FFFFFF':
    'invert(99%) sepia(0%) saturate(2470%) hue-rotate(287deg) brightness(117%) contrast(100%)',

  '#F02746':
    'invert(25%) sepia(52%) saturate(6453%) hue-rotate(339deg) brightness(98%) contrast(91%)',
  '#FEEAED':
    'invert(83%) sepia(27%) saturate(139%) hue-rotate(305deg) brightness(108%) contrast(99%)',
  '#F9A9B5':
    'invert(91%) sepia(62%) saturate(4445%) hue-rotate(287deg) brightness(98%) contrast(100%)',

  '#863EFC':
    'invert(34%) sepia(43%) saturate(7356%) hue-rotate(251deg) brightness(97%) contrast(105%)',
  '#662DC2':
    'invert(18%) sepia(99%) saturate(2944%) hue-rotate(259deg) brightness(82%) contrast(92%)',
  '#4A1B96':
    'invert(9%) sepia(61%) saturate(5354%) hue-rotate(261deg) brightness(113%) contrast(98%)',
};

export const IconContainer = styled.img`
  src: ${(props) => props.src};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  filter: ${(props) => FILTER[props.fill]};
`;
