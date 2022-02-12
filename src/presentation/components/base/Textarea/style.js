import styled from '@emotion/styled';
import { COLOR, FONT } from '@styles';
import { MAX_WIDTH } from '@utils/constants';
const RootTextarea = styled.textarea`
  width: 100%;
  height: 180px;
  padding: 8px;
  color: ${COLOR.GRAY_900};
  border: 1px solid ${COLOR.GRAY_300};
  border-radius: 4px;
  outline: none;
  resize: none;
  font-size: 16px;

  &:placeholder-shown {
    color: ${COLOR.GRAY_500};
  }
  &:focus {
    border: 1px solid ${COLOR.GRAY_900};
  }
`;

const ContentContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 100%;
  justify-content: flex-end;
  max-width: ${MAX_WIDTH};
  height: 18px;
`;

const TextCounting = styled.span`
  font-size: ${FONT.R_12_BODY};
  color: ${COLOR.GRAY_500};
  &.error {
    color: ${COLOR.RED_500};
  }
`;

export { RootTextarea, ContentContainer, TextCounting };
