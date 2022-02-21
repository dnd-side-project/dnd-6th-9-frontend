import styled from '@emotion/styled';
import school_top from '@assets/images/schoolTheme/school_top.png';
import school_bottom from '@assets/images/schoolTheme/school_bottom.png';

const MainThemeContainer = styled.div`
  margin-top: 21px;
  width: 100%;
  font-size: 0px;
`;

const ThemeTop = styled.div`
  width: 100%;
  aspect-ratio: 360/120;
  background: url(${school_top}) no-repeat;
  background-size: cover;
  margin-bottom: -1.5px;
`;

const ThemeBottom = styled.div`
  width: 100%;
  aspect-ratio: 360/120;
  background: url(${school_bottom}) no-repeat;
  background-size: cover;
`;

export { MainThemeContainer, ThemeTop, ThemeBottom };
