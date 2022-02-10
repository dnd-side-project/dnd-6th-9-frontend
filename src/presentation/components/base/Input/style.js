import styled from '@emotion/styled';
import { typeOfSize } from '@utils/conversionsFunc';
import { COLOR } from '@styles';

const RootInput = styled.input`
  width: ${({ width }) => typeOfSize(width)};
  height: ${({ height }) => typeOfSize(height)};
  padding: 0 8px;
  color: ${COLOR.GRAY_800};
  border: none;
  box-sizing: border-box;
  border-bottom: 1px solid ${COLOR.GRAY_500};
  &:placeholder-shown {
    color: ${COLOR.GRAY_500};
    border-bottom: 1px solid ${COLOR.GRAY_300};
  }
  &:focus {
    color: ${COLOR.GRAY_900};
    outline: none;
    border-bottom: 1px solid ${COLOR.GRAY_900};
  }
  &.error {
    color: ${COLOR.GRAY_800};
    border-bottom: 1px solid ${COLOR.RED_500};
  }
`;

export default RootInput;
