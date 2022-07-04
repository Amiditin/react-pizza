import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FiltersState, IFilters } from './types';
import { IPizzaCategory, IPizzaSort } from '../../utils/interfaces/IPizzaOptions';
import { pizzaCategories, pizzaSorts } from '../../utils/constans/pizzaOptions';

const initialState: FiltersState = {
  category: pizzaCategories[0],
  search: '',
  sort: pizzaSorts[0],
  sortDescending: false,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<IPizzaCategory>) {
      state.category = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setSort(state, action: PayloadAction<IPizzaSort>) {
      state.sort = action.payload;
    },
    setSortDescending(state, action: PayloadAction<boolean>) {
      state.sortDescending = action.payload;
    },
    setFilters(state, action: PayloadAction<IFilters>) {
      state.category = action.payload.category;
      state.search = action.payload.search;
      state.sort = action.payload.sort;
    },
  },
});

export const { setCategory, setSearch, setSort, setSortDescending, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
