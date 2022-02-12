import styled from "@emotion/styled";


const ImageWrapper = styled.img`
  object-fit: ${(props) => props.mode};
  object-position: 50% 50%;
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export default ImageWrapper;