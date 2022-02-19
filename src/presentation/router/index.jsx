import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { MessageCreatePage } from '@pages';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MessageCreatePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
