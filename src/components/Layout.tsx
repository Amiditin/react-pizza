import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Header from './Header';

const Layout: React.FC = () => {
  const location = useLocation();

  React.useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <div className="wrapper">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
