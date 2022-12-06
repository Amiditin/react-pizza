import {
  filterReducer,
  setCategory,
  setSearch,
  setSort,
  setSortDescending,
  setFilters,
} from './slice';
import { pizzaCategories, pizzaSorts } from '../../utils/constans/pizzaOptions';
import { FiltersState, IFilters } from './types';

describe('filterSlice', () => {
  const initialState: FiltersState = {
    category: pizzaCategories[0],
    search: '',
    sort: pizzaSorts[0],
    sortDescending: false,
  };

  test('should return the initial state', () => {
    const result = filterReducer(undefined, { type: undefined });

    expect(result).toEqual(initialState);
  });

  test('should set up category equal payload with "setCategory" action', () => {
    pizzaCategories.forEach((category) => {
      const previosState: FiltersState = { ...initialState, category: category };

      pizzaCategories.forEach((payload) => {
        const expectedState = { ...initialState, category: payload };
        const result = filterReducer(previosState, setCategory(payload));

        expect(result).toEqual(expectedState);
      });
    });
  });

  test('should set up sort equal payload with "setSort" action', () => {
    pizzaSorts.forEach((sort) => {
      const previosState: FiltersState = { ...initialState, sort: sort };

      pizzaSorts.forEach((payload) => {
        const expectedState = { ...initialState, sort: payload };
        const result = filterReducer(previosState, setSort(payload));

        expect(result).toEqual(expectedState);
      });
    });
  });

  test('should set up search equal payload with "setSearch" action', () => {
    interface ICases {
      previosState: FiltersState;
      payload: string;
      expectedState: FiltersState;
    }

    const cases: ICases[] = [
      {
        previosState: initialState,
        payload: 'test',
        expectedState: { ...initialState, search: 'test' },
      },
      {
        previosState: { ...initialState, search: 'test_1' },
        payload: 'test_2',
        expectedState: { ...initialState, search: 'test_2' },
      },
      {
        previosState: { ...initialState, search: 'test' },
        payload: 'test',
        expectedState: { ...initialState, search: 'test' },
      },
      {
        previosState: { ...initialState, search: 'test' },
        payload: '',
        expectedState: initialState,
      },
    ];

    cases.forEach((item) => {
      const result = filterReducer(item.previosState, setSearch(item.payload));

      expect(result).toEqual(item.expectedState);
    });
  });

  test('should set up sortDescending equal payload with "setSortDescending" action', () => {
    interface ICases {
      previosState: FiltersState;
      payload: boolean;
      expectedState: FiltersState;
    }

    const cases: ICases[] = [
      {
        previosState: initialState,
        payload: true,
        expectedState: { ...initialState, sortDescending: true },
      },
      {
        previosState: { ...initialState, sortDescending: true },
        payload: false,
        expectedState: initialState,
      },
      {
        previosState: { ...initialState, sortDescending: true },
        payload: true,
        expectedState: { ...initialState, sortDescending: true },
      },
      {
        previosState: { ...initialState, sortDescending: false },
        payload: false,
        expectedState: { ...initialState, sortDescending: false },
      },
    ];

    cases.forEach((item) => {
      const result = filterReducer(item.previosState, setSortDescending(item.payload));

      expect(result).toEqual(item.expectedState);
    });
  });

  test('should set up category & sort & search equal payload with "setFilters" action', () => {
    interface ICases {
      previosState: FiltersState;
      payload: IFilters;
      expectedState: FiltersState;
    }

    const cases: ICases[] = [
      {
        previosState: initialState,
        payload: {
          category: pizzaCategories[3],
          search: 'test',
          sort: pizzaSorts[2],
        },
        expectedState: {
          ...initialState,
          category: pizzaCategories[3],
          search: 'test',
          sort: pizzaSorts[2],
        },
      },
      {
        previosState: initialState,
        payload: {
          category: pizzaCategories[100],
          search: '',
          sort: pizzaSorts[100],
        },
        expectedState: initialState,
      },
    ];

    cases.forEach((item) => {
      const result = filterReducer(item.previosState, setFilters(item.payload));

      expect(result).toEqual(item.expectedState);
    });
  });
});
