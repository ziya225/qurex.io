import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NoPage from '../pages/404';
import Layout from '../pages/Layout';
import Register from '../pages/Register';
import Login from '../pages/Login';
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
