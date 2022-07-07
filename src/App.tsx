import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './layouts/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { LoadingPage } from './components';

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart'));

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<LoadingPage />}>
              <Cart />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
