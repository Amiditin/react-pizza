import { IPizzaCategory, IPizzaSort } from '../../utils/interfaces/IPizzaOptions';

export interface IFiltersState {
  category: IPizzaCategory;
  search: string;
  sort: IPizzaSort;
  sortDescending: boolean;
}
