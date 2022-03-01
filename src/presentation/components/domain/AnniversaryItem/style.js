import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { FONT, COLOR } from '@styles';
import { MAX_WIDTH } from '@utils/constants';

const Container = styled.div`
  width: 100%;
  height: 96px;
  padding: 8px 0;
  ${({ theme }) => theme.common.flexCenter};
  justify-content: space-between;
`;

const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 15px 7% 0;
`;
const Title = styled.div`
  ${FONT.SB_14_TITLE}
  color: ${COLOR.GRAY_900};
  margin-bottom: 8px;
`;

const DateIndicator = styled.div`
  ${FONT.R_12_BODY}
  color: ${COLOR.GRAY_700};
  ${({ theme }) => theme.common.flexCenter};
  justify-content: start;
`;

const Date = styled.div`
  margin-left: 8px;
`;

const IconWrapper = styled.div`
  height: 100%;
  padding: 15px 0;
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
  margin-bottom: 8px;
`;
const ModalSubText = styled.div`
  margin-bottom: 16px;
  ${FONT.R_16_BODY}
  color: ${COLOR.GRAY_700};
`;

const ModalButtonStyle = {
  width: '100%',
  height: '48px',
  marginBottom: '8px',
  borderRadius: '4px',
};

export {
  Container,
  ContentContainer,
  Title,
  DateIndicator,
  Date,
  IconWrapper,
  ModalStyle,
  ModalContent,
  ModalText,
  ModalButtonStyle,
  ModalSubText,
};
