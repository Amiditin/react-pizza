import { configureStore } from '@reduxjs/toolkit';

import filterReducer from './filter/slice';
import paginationReducer from './pagination/slice';

const store = configureStore({
  reducer: {
    filter: filterReducer,
    pagination: paginationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
