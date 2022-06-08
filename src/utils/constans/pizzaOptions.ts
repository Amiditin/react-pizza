import { IPizzaCategory, IPizzaType, IPizzaFilters } from '../types/IPizzaOptions';

const pizzaCategories: IPizzaCategory[] = [
  { id: 0, name: 'Все' },
  { id: 1, name: 'Мясные' },
  { id: 2, name: 'Вегетарианская' },
  { id: 3, name: 'Гриль' },
  { id: 4, name: 'Острые' },
  { id: 5, name: 'Закрытые' },
];

const pizzaTypes: IPizzaType[] = [
  { id: 0, name: 'тонкое' },
  { id: 1, name: 'традиционное' },
];

const pizzaFilters: IPizzaFilters[] = [
  { id: 0, name: 'популярности' },
  { id: 1, name: 'цене' },
  { id: 2, name: 'алфавиту' },
];

export { pizzaCategories, pizzaTypes, pizzaFilters };
