import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './Pages/Login';
import { RegisterPage } from './Pages/Register';
import { DashboardPage } from './Pages/Dashboard';
import { HomePage } from './Pages/Home';
import { NotFoundPage } from './Pages/NotFound';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/dashboard' element={<DashboardPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};