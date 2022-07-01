import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cart/slice';
import filterReducer from './filter/slice';
import paginationReducer from './pagination/slice';
import pizzaReducer from './pizza/slice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: filterReducer,
    pagination: paginationReducer,
    pizza: pizzaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
