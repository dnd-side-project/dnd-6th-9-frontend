import styled from '@emotion/styled';
import { typeOfSize } from '@utils/conversionsFunc';
const ImageContainer = styled.div`
  height: ${({ height }) => typeOfSize(height)};
  width: ${({ width }) => typeOfSize(width)};
  overflow: hidden;
`;

export default ImageContainer;
