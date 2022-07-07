import paginationReducer, { setCurPage, setPageSize } from './slice';
import { PaginationState } from './types';

describe('filterSlice', () => {
  const initialState: PaginationState = {
    curPage: 1,
    pageSize: 8,
  };

  test('should return the initial state', () => {
    const result = paginationReducer(undefined, { type: undefined });

    expect(result).toEqual(initialState);
  });

  test('should set up curPage equal payload with "setCurPage" action', () => {
    interface ICases {
      previosState: PaginationState;
      payload: number;
      expectedState: PaginationState;
    }

    const cases: ICases[] = [
      {
        previosState: initialState,
        payload: 5,
        expectedState: { ...initialState, curPage: 5 },
      },
      {
        previosState: { ...initialState, curPage: 5 },
        payload: 5,
        expectedState: { ...initialState, curPage: 5 },
      },
      {
        previosState: { ...initialState, curPage: 5 },
        payload: 100,
        expectedState: { ...initialState, curPage: 100 },
      },
      {
        previosState: { ...initialState, curPage: 5 },
        payload: 0,
        expectedState: { ...initialState, curPage: 5 },
      },
      {
        previosState: { ...initialState, curPage: 5 },
        payload: -100,
        expectedState: { ...initialState, curPage: 5 },
      },
    ];

    cases.forEach((item) => {
      const result = paginationReducer(item.previosState, setCurPage(item.payload));

      expect(result).toEqual(item.expectedState);
    });
  });

  test('should set up pageSize equal payload with "setPageSize" action', () => {
    interface ICases {
      previosState: PaginationState;
      payload: number;
      expectedState: PaginationState;
    }

    const cases: ICases[] = [
      {
        previosState: initialState,
        payload: 5,
        expectedState: { ...initialState, pageSize: 5 },
      },
      {
        previosState: { ...initialState, pageSize: 5 },
        payload: 5,
        expectedState: { ...initialState, pageSize: 5 },
      },
      {
        previosState: { ...initialState, pageSize: 5 },
        payload: 100,
        expectedState: { ...initialState, pageSize: 100 },
      },
      {
        previosState: { ...initialState, pageSize: 5 },
        payload: 0,
        expectedState: { ...initialState, pageSize: 5 },
      },
      {
        previosState: { ...initialState, pageSize: 5 },
        payload: -100,
        expectedState: { ...initialState, pageSize: 5 },
      },
    ];

    cases.forEach((item) => {
      const result = paginationReducer(item.previosState, setPageSize(item.payload));

      expect(result).toEqual(item.expectedState);
    });
  });
});
