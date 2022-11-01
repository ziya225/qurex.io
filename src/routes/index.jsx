import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import NoPage from '../pages/404';
import Layout from '../pages/Layout';
import Register from '../pages/Register';
import Login from '../pages/Login';
import TreatmentPage from '../pages/TreatmentPage';
import Doctor from '../pages/Doctor';
import Consult from '../components/Consult';
import Confirm from '../components/Confirm';
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/treatment" element={<TreatmentPage />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/booking-calendar" element={<Consult />} />
          <Route path="/confirm-payment" element={<Confirm />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
