import { IPizzaCategory, IPizzaType, IPizzaSort } from '../interfaces/IPizzaOptions';

const pizzaCategories: IPizzaCategory[] = [
  { id: 0, name: 'Все' }, // default category
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

const pizzaSorts: IPizzaSort[] = [
  { id: 0, name: 'rating', title: 'популярности' }, // default sort
  { id: 1, name: 'price', title: 'цене' },
  { id: 2, name: 'title', title: 'алфавиту' },
];

export { pizzaCategories, pizzaTypes, pizzaSorts };
