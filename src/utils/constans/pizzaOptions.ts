import { IPizzaCategory, IPizzaType, IPizzaSort } from '../interfaces/IPizzaOptions';

const pizzaCategories: IPizzaCategory[] = [
  { id: 0, name: 'Все' }, // default category
  { id: 1, name: 'Популярные' },
  { id: 2, name: 'Мясные' },
  { id: 3, name: 'Вегетарианские' },
  { id: 4, name: 'Острые' },
  { id: 5, name: 'Грибные' },
];

const pizzaTypes: IPizzaType[] = [
  { id: 0, name: 'тонкое' }, // default type
  { id: 1, name: 'традиционное' },
];

const pizzaSorts: IPizzaSort[] = [
  { id: 0, name: 'rating', title: 'рейтингу' }, // default sort
  { id: 1, name: 'price', title: 'цене' },
  { id: 2, name: 'title', title: 'алфавиту' },
];

export { pizzaCategories, pizzaTypes, pizzaSorts };
