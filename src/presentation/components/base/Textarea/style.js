import styled from '@emotion/styled';
import { COLOR, FONT } from '@styles';
import { MAX_WIDTH } from '@utils/constants';
const RootTextarea = styled.textarea`
  width: 100%;
  height: 160px;
  color: ${COLOR.GRAY_900};
  border: none;
  outline: none;
  resize: none;
  &:placeholder-shown {
    color: ${COLOR.GRAY_500};
  }
  ${FONT.R_BODY_14}
`;

const RootTextareaWrapper = styled.div`
  width: 100%;
  padding: 10px;
  color: ${COLOR.GRAY_900};
  border: 1px solid ${COLOR.GRAY_300};
  border-radius: 4px;
  &:focus {
    border: 1px solid ${COLOR.GRAY_900};
  }
  ${({ isFocus }) => isFocus && `border-color: ${COLOR.GRAY_900};`}
`;

const ContentContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 100%;
  justify-content: flex-end;
  max-width: ${MAX_WIDTH};
  height: 22px;
`;

const TextCounting = styled.span`
  ${FONT.R_12_BODY};
  color: ${COLOR.GRAY_500};
  &.error {
    strong {
      color: ${COLOR.RED_500};
    }
  }
`;

export { RootTextareaWrapper, RootTextarea, ContentContainer, TextCounting };
