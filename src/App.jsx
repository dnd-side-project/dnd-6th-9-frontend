import React from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import { globalStyle, theme } from '@styles';
import Router from '@router';
const App = () => {
  return (
    <>
      <ThemeProvider theme={theme['light']}>
        <Global styles={globalStyle} />
        <Router />
      </ThemeProvider>
    </>
  );
};

export default App;
