import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { MyPage } from '@pages';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
