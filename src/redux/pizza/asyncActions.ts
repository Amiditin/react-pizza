import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IFilters } from '../filter/types';
import IPizza from '../../utils/interfaces/IPizza';

import { pizzaCategories } from '../../utils/constans/pizzaOptions';
import { mockapiUrl } from '../../utils/constans/mockapiUrl';

export const fetchPizzas = createAsyncThunk<IPizza[], IFilters>(
  'pizzas/fetchPizzas',
  async (filters) => {
    const { category, sort, search } = filters;

    const { data } = await axios.get<IPizza[]>(
      `${mockapiUrl}/items?sortBy=${sort.name}` +
        `${category !== pizzaCategories[0] ? '&category=' + category.id : ''}` +
        `${search ? '&search=' + search : ''}`,
    );

    return data;
  },
);
