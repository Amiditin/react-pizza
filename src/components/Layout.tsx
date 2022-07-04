import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setPizzasToCart } from '../redux/cart/slice';

import Header from './Header';

const Layout: React.FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const isMounted = React.useRef<boolean>(false);
  const { items } = useAppSelector((state) => state.cart);

  React.useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location]);

  React.useEffect(() => {
    isMounted.current
      ? localStorage.setItem('cartItems', JSON.stringify(items))
      : dispatch(setPizzasToCart(JSON.parse(localStorage.getItem('cartItems') || '[]')));

    isMounted.current = true;
  }, [items, dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
