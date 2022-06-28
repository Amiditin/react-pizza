import { IPizzaCategory, IPizzaSort } from '../../utils/interfaces/IPizzaOptions';

export interface IFiltersState {
  category: IPizzaCategory;
  sort: IPizzaSort;
  sortDescending: boolean;
}
