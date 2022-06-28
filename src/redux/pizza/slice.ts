import { createSlice } from '@reduxjs/toolkit';
import { PizzasState, Status } from './types';

const initialState: PizzasState = {
  items: [],
  status: Status.LOADING,
};

const pizzaSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {},
});

export default pizzaSlice.reducer;
