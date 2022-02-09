import React from 'react';
import { Global } from '@emotion/react';
import { globalStyle } from '@styles';
import Router from '@router';
const App = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <Router />
    </>
  );
};

export default App;
