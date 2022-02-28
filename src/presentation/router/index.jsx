import { Route, Routes, BrowserRouter } from 'react-router-dom';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Test</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
