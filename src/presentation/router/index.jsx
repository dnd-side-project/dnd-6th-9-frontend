import { Route, Routes, BrowserRouter } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>test</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
