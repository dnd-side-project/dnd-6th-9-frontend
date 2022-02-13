import styled from '@emotion/styled';

const ImageWrapper = styled.img`
  object-fit: ${(props) => props.mode};
  object-position: 50% 50%;
  src: ${(props) => props.src};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const ImageContainer = styled.div``;

export { ImageWrapper, ImageContainer };
