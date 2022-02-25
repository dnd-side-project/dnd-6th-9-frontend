import styled from '@emotion/styled';
import { COLOR } from '@styles';
const ListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5%;
  padding-bottom: 80px;
`;

const ButtonStyle = {
  aspectRatio: '1',
};

const SelectedButtonStyle = {
  aspectRatio: '1',
  color: COLOR.PURPLE_500,
  border: `1px solid ${COLOR.PURPLE_500}`,
};

export { ListContainer, ButtonStyle, SelectedButtonStyle };
