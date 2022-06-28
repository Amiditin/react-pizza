import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFiltersState } from './types';
import { IPizzaCategory, IPizzaSort } from '../../utils/interfaces/IPizzaOptions';
import { pizzaCategories, pizzaSorts } from '../../utils/constans/pizzaOptions';

const initialState: IFiltersState = {
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
  },
});

export const { setCategory, setSearch, setSort, setSortDescending } = filterSlice.actions;

export default filterSlice.reducer;
