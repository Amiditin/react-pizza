import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PaginationState } from './types';

const initialState: PaginationState = {
  curPage: 1,
  pageSize: 8,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurPage(state, actions: PayloadAction<number>) {
      if (actions.payload > 0) state.curPage = actions.payload;
    },
    setPageSize(state, actions: PayloadAction<number>) {
      if (actions.payload > 0) state.pageSize = actions.payload;
    },
  },
});

export const { setCurPage, setPageSize } = paginationSlice.actions;

export default paginationSlice.reducer;
