import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { FONT, COLOR } from '@styles';

const MessageContainer = styled.div`
  width: 100%;
  padding: 24px 24px 16px;
  margin-bottom: 16px;
  ${({ theme }) => theme.common.flexCenterColumn};
  justify-content: start;
  align-items: start;
  &:nth-child(odd) {
    background: ${COLOR.PURPLE_100};
  }
  &:nth-child(even) {
    background: ${COLOR.PINK_100};
  }
`;

const ContentTitle = styled.div`
  ${FONT.SB_18_TITLE}
  color: ${COLOR.GRAY_900};
  margin-top: 16px;
  margin-bottom: 8px;
`;

const Content = styled.div`
  ${FONT.R_14_BODY}
  color: ${COLOR.GRAY_800};
  margin-bottom: 16px;
  line-height: 1.5;
  &.fold {
    max-height: 3em;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const BottomWrapper = styled.div`
  width: 100%;
  ${({ theme }) => theme.common.flexCenter};
  justify-content: space-between;
`;

const DateWrapper = styled.div`
  margin-bottom: 8px;
`;
const Date = styled.div`
  ${FONT.R_12_BODY}
  color: ${COLOR.GRAY_900};
`;

const Button = styled.button`
  height: 29px;
  ${({ theme }) => theme.common.flexCenter};
  padding: 0 8px;
  background-color: transparent;
  border: 1px solid ${COLOR.PURPLE_500};
  box-sizing: border-box;
  border-radius: 4px;
  ${FONT.SB_14_TITLE}
  color: ${COLOR.PURPLE_500};
`;

//Icon right top bottom
const arrowTop = css`
  transform: rotate(-90deg);
`;

const arrowBottom = css`
  transform: rotate(90deg);
`;

export {
  MessageContainer,
  ContentTitle,
  Content,
  BottomWrapper,
  Date,
  DateWrapper,
  Button,
  arrowTop,
  arrowBottom,
};
