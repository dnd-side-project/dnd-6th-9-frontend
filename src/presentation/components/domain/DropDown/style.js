import styled from '@emotion/styled';
import { FONT, COLOR } from '@styles';
import { MAX_WIDTH } from '@utils/constants';
import { css } from '@emotion/react';

const DropDownContent = styled.ul`
  right: 30%;
  position: absolute;
  width: 110px;
  background: ${COLOR.WHITE};
  border-radius: 4px;
  list-style: none;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  &.dropDownOn {
    display: block;
  }
  &.dropDownOff {
    display: none;
  }
`;

const Item = styled.li`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid ${COLOR.GRAY_100};
  color: ${COLOR.GRAY_700};
  ${FONT.R_12_BODY};
  padding: 8px 36px 8px 8px;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    color: ${COLOR.PURPLE_500};
  }
  &:active {
    color: ${COLOR.PURPLE_500};
  }
`;

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  align-self: flex-end;
  cursor: pointer;
  position: relative;
  }
`;

const ModalStyle = css`
  border-radius: 8px;
  max-width: ${MAX_WIDTH};
`;

const ModalContent = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
`;

const ModalText = styled.div`
  ${({ theme }) => theme.common.flexCenter};

  ${FONT.B_20_TITLE};
  color: ${COLOR.GRAY_900};
  margin-bottom: 16px;
`;

const ModalButtonStyle = {
  width: '100%',
  height: '48px',
  borderRadius: '4px',
};

const ModalSubText = styled.div`
  margin-top: 8px;
  margin-bottom: 16px;
  ${FONT.R_16_BODY}
  color: ${COLOR.GRAY_700};
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 104px;
  ${({ theme }) => theme.common.flexCenterColumn};
  justify-content: space-between;
`;

export {
  DropDownContent,
  Item,
  IconWrapper,
  ModalStyle,
  ModalContent,
  ModalText,
  ModalButtonStyle,
  ModalSubText,
  ButtonContainer,
};
