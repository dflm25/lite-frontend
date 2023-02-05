import { Navigate, Outlet } from 'react-router-dom';
import { getStorage } from '../utilities/storage';

const PrivateRoutes = () => {
  const currentSesion = getStorage('session');
  let auth = currentSesion !== null ? JSON.parse(currentSesion) : currentSesion;

  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
