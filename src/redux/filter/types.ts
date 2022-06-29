import { IPizzaCategory, IPizzaSort } from '../../utils/interfaces/IPizzaOptions';

interface IFilters {
  category: IPizzaCategory;
  search: string;
  sort: IPizzaSort;
}
export interface IFiltersState extends IFilters {
  sortDescending: boolean;
}

export interface IFiltersSetter extends IFilters {}
