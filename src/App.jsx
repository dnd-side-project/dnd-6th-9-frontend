import React from 'react';
import Router from './router';
import {
  RecoilRoot,
} from 'recoil';

const App = () => {
  return (
    <>
    <RecoilRoot>
      <Router />
    </RecoilRoot>
    </>
  );
};

export default App;
