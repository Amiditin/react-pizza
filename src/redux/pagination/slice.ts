import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPagination } from './types';

const initialState: IPagination = {
  curPage: 1,
  pageSize: 4,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurPage(state, actions: PayloadAction<number>) {
      state.curPage = actions.payload;
    },
    setPageSize(state, actions: PayloadAction<number>) {
      state.pageSize = actions.payload;
    },
  },
});

export const { setCurPage, setPageSize } = paginationSlice.actions;

export default paginationSlice.reducer;
