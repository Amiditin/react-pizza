import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pizza, ICartPizza, CartPizzasState, ICartChangePizza } from './types';

const initialState: CartPizzasState = {
  items: [],
  numberItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setPizzasToCart: (state, action: PayloadAction<ICartPizza[]>) => {
      state.items = action.payload;
      state.numberItems = action.payload.reduce((sum, item) => sum + item.number, 0);
      state.totalPrice = action.payload.reduce(
        (sum, item) => sum + item.value.price * item.number,
        0,
      );
    },
    addPizzaToCart(state, action: PayloadAction<Pizza>) {
      const pizza = state.items.find(
        (pizza) => JSON.stringify(pizza.value) === JSON.stringify(action.payload),
      );
      pizza ? (pizza.number += 1) : state.items.push({ value: action.payload, number: 1 });
      state.numberItems += 1;
      state.totalPrice += action.payload.price;
    },
    removePizzaFromCart(state, action: PayloadAction<ICartPizza>) {
      state.items = state.items.filter(
        (item) => JSON.stringify(item) !== JSON.stringify(action.payload),
      );
      state.numberItems -= action.payload.number;
      state.totalPrice -= action.payload.value.price * action.payload.number;
    },
    changeNumberPizza(state, action: PayloadAction<ICartChangePizza>) {
      const pizza = state.items.find(
        (pizza) => JSON.stringify(pizza) === JSON.stringify(action.payload.item),
      );

      if (pizza) pizza.number += action.payload.difference;
      state.numberItems += action.payload.difference;
      state.totalPrice += action.payload.item.value.price * action.payload.difference;
    },
    clearCart(state) {
      state.items = [];
      state.numberItems = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  setPizzasToCart,
  addPizzaToCart,
  removePizzaFromCart,
  clearCart,
  changeNumberPizza,
} = cartSlice.actions;

export default cartSlice.reducer;
