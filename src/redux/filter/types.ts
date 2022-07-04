import { IPizzaCategory, IPizzaSort } from '../../utils/interfaces/IPizzaOptions';

export interface IFilters {
  category: IPizzaCategory;
  search: string;
  sort: IPizzaSort;
}
export interface FiltersState extends IFilters {
  sortDescending: boolean;
}
