import React from 'react';
import { Global } from '@emotion/core';
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
