import IPizza from '../../utils/interfaces/IPizza';
import { IPizzaCategory, IPizzaSort } from '../../utils/interfaces/IPizzaOptions';

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}
export interface PizzasState {
  items: IPizza[];
  status: Status;
}
export interface IFilters {
  category: IPizzaCategory;
  sort: IPizzaSort;
  search: string;
}
