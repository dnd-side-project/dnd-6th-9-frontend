import styled from '@emotion/styled';
import { ReactComponent as Error_Icon } from '@assets/icons/error_icon.svg';
import { typeOfSize } from '@utils/conversionsFunc';
import { COLOR, FONT } from '@styles';

const RootWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  width: ${({ width }) => typeOfSize(width)};
  height: ${({ height }) => typeOfSize(height)};
  color: ${COLOR.GRAY_500};
  border-bottom: 1px solid ${COLOR.GRAY_500};
  ${({ value, isFocus }) =>
    (value.length || (isFocus && value.length === 0)) &&
    ` 
       color: ${COLOR.GRAY_900};
       border-bottom: 1px solid ${COLOR.GRAY_900};
    `}
  ${({ error }) => error && `border-bottom: 1px solid ${COLOR.RED_500}`}
`;

const RootInput = styled.input`
  width: ${({ width }) => typeOfSize(width)};
  height: ${({ height }) => typeOfSize(height)};
  padding: 0 8px;
  border: none;
  box-sizing: border-box;
  ${FONT.R_14_BODY}
`;

const ErrorIcon = styled(Error_Icon)`
  width: 20px;
  height: 18px;
  margin-right: 8px;
`;

const CountText = styled.p`
  color: ${COLOR.GRAY_500};
  margin-right: 10px;
  ${FONT.R_14_BODY}
`;

export { RootInput, RootWrapper, CountText, ErrorIcon };
