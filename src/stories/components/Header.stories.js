import { Header } from '@components/base';
import styled from '@emotion/styled';
export default {
  title: 'Components/Header',
  component: Header,
};

// 헤더가 들어갈 시, HeaderInMainPostion을 통해 content Main을 밀어주어야함.
const Background = styled.div`
  background-color: grey;
  height: 200vh;
  ${({ theme }) => theme.common.HeaderInMainPosition};
`;

const Text = styled.span`
  color: white;
  font-size: 50px;
`;

export const Default = (...args) => {
  return (
    <Background>
      <Header
        leftContent={<div>Left</div>}
        centerContent={<div>Center</div>}
        rightContent={<div>Right</div>}
        {...args}
      />
      <Text>테스팅</Text>
    </Background>
  );
};

export const Secondary = (...args) => {
  return (
    <Background>
      <Header
        leftContent={<div>Left</div>}
        rightContent={<div>Right</div>}
        {...args}
      />
    </Background>
  );
};

export const Third = (...args) => {
  return (
    <Background>
      <Header
        leftContent={<div>Left</div>}
        centerContent={<div>Center</div>}
        {...args}
      />
    </Background>
  );
};
