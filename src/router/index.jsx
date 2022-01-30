import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Main</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
