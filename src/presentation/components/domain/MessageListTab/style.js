import styled from '@emotion/styled';
import { COLOR, FONT } from '@styles';

const Text = styled.div`
  ${FONT.R_16_BODY}
  color: ${COLOR.GRAY_500};
  margin-top: 8px;
  margin-bottom: 16px;
`;

const sliderStyle = {
  display: 'flex',
  justifyContent: 'center',
};
const swiperStyle = {
  height: '57px',
  borderBottom: `1px solid ${COLOR.GRAY_300}`,
};

const DotWrapper = styled.div`
  height: 8px;
`;
const Dot = styled.div`
  background-color: ${COLOR.PURPLE_500};
  margin: 0 auto;
  width: 5px;
  height: 5px;
  border-radius: 50%;
`;

const TabWrapper = styled.div`
  marginbottom: '16px';
`;
export { Text, sliderStyle, swiperStyle, DotWrapper, Dot, TabWrapper };
