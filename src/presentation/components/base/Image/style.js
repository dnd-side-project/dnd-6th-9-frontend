import styled from '@emotion/styled';
import { typeOfSize } from '@utils/conversionsFunc';
const ImageContainer = styled.div`
  height: ${({ height }) => typeOfSize(height)};
  width: ${({ width }) => typeOfSize(width)};
  overflow: hidden;
`;

const ImageStyle = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${({ mode }) => mode};
  object-position: 50% 50%;
`;
export { ImageContainer, ImageStyle };
