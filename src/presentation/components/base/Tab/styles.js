import styled from '@emotion/styled';
import { MAX_WIDTH } from '@utils/constants';
import { COLOR } from '@styles';
const TabContainer = styled.div`
  max-width: ${MAX_WIDTH};
`;

const Tabs = styled.div`
  width: 100%;
  display: flex;
`;

const TabWrapper = styled.div`
  width: ${(props) => window.innerWidth / props.column}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IndicatorWrapper = styled.div`
  position: relative;
  height: 3px;
  background: ${COLOR.GRAY_300};
`;
const Indicator = styled.div(
  {
    position: 'absolute',
    height: '3px',
    background: COLOR.PURPLE_500,
  },
  (props) => ({
    width: `${100 / props.column}%`,
    marginLeft: `${(props.active * 100) / props.column}%`,
  }),
);

const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const EventWrapper = styled.div(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  (props) => ({
    width: `${100 / props.column}%`,
  }),
);

export {
  TabContainer,
  Tabs,
  TabWrapper,
  Indicator,
  ListWrapper,
  EventWrapper,
  IndicatorWrapper,
};
