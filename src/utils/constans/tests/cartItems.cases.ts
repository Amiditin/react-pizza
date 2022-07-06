import { CartPizzasState } from '../../../redux/cart/types';

interface ICartItemsCases {
  [key: string]: CartPizzasState;
}

export const cartItemsCases: ICartItemsCases = {
  empty: {
    items: [],
    numberItems: 0,
    totalPrice: 0,
  },
  oneItem: {
    items: [
      {
        value: {
          imageUrl:
            'https://cdn.papajohns.ru//images/catalog/thumbs/cart/f6375e9bcad722574c764dbcc8181c93.webp',
          title: 'Чеддер Мексикан',
          type: 1,
          size: 23,
          price: 599,
        },
        number: 1,
      },
    ],
    numberItems: 1,
    totalPrice: 599,
  },
  threeSameItems: {
    items: [
      {
        value: {
          imageUrl:
            'https://cdn.papajohns.ru//images/catalog/thumbs/cart/f6375e9bcad722574c764dbcc8181c93.webp',
          title: 'Чеддер Мексикан',
          type: 1,
          size: 23,
          price: 599,
        },
        number: 3,
      },
    ],
    numberItems: 3,
    totalPrice: 1797,
  },
  randomNumberItems: {
    items: [
      {
        value: {
          imageUrl:
            'https://cdn.papajohns.ru//images/catalog/thumbs/cart/f6375e9bcad722574c764dbcc8181c93.webp',
          title: 'Чеддер Мексикан',
          type: 1,
          size: 23,
          price: 599,
        },
        number: 1,
      },
      {
        value: {
          imageUrl:
            'https://cdn.papajohns.ru//images/catalog/thumbs/cart/f6375e9bcad722574c764dbcc8181c93.webp',
          title: 'Чеддер Мексикан',
          type: 1,
          size: 35,
          price: 999,
        },
        number: 1,
      },
      {
        value: {
          imageUrl:
            'https://cdn.papajohns.ru//images/catalog/thumbs/cart/f6375e9bcad722574c764dbcc8181c93.webp',
          title: 'Чеддер Мексикан',
          type: 0,
          size: 40,
          price: 1189,
        },
        number: 1,
      },
      {
        value: {
          imageUrl:
            'https://cdn.papajohns.ru//images/catalog/thumbs/cart/c3801183d9a96b1a7ad600c11add2d83.webp',
          title: 'Чеддер Чизбургер',
          type: 0,
          size: 30,
          price: 899,
        },
        number: 1,
      },
      {
        value: {
          imageUrl:
            'https://cdn.papajohns.ru//images/catalog/thumbs/cart/a1de223e2242ff52fd47582a26c9d7ac.webp',
          title: 'Спайси Пепперони Биф',
          type: 0,
          size: 30,
          price: 733,
        },
        number: 2,
      },
      {
        value: {
          imageUrl:
            'https://cdn.papajohns.ru//images/catalog/thumbs/cart/4ab9414c8c9d0a88b270c8add19ebb13.webp',
          title: 'Хот Пепперони',
          type: 1,
          size: 40,
          price: 1017,
        },
        number: 1,
      },
    ],
    numberItems: 7,
    totalPrice: 6169,
  },
};
