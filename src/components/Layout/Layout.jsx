import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import '../../index.css';

export const Layout = () => {
  return (
    <div className="container">
      <AppBar />
      <Outlet />
    </div>
  );
};
