import { cartItems } from '../../utils/constans/tests/cartItems.cases';
import cartReducer, {
  setPizzasToCart,
  addPizzaToCart,
  removePizzaFromCart,
  clearCart,
  changeNumberPizza,
} from './slice';
import { Pizza, ICartPizza, CartPizzasState } from './types';

describe('cartSlice', () => {
  const initialState: CartPizzasState = { items: [], numberItems: 0, totalPrice: 0 };

  test('should return the initial state', () => {
    const result = cartReducer(undefined, { type: '' });

    expect(result).toEqual(initialState);
  });

  test('should set up state equal payload items with "setPizzasToCart" action', () => {
    cartItems.forEach((previosState) => {
      cartItems.forEach((expectedState) => {
        const result = cartReducer(previosState, setPizzasToCart(expectedState.items));

        expect(result).toEqual(expectedState);
      });
    });
  });

  test('should clear a existing state to initial state with "clearCart" action', () => {
    cartItems.forEach((previosState) => {
      const result = cartReducer(previosState, clearCart());

      expect(result).toEqual(initialState);
    });
  });

  test('should add new item to cart with "addPizzaToCart" action', () => {
    cartItems.forEach((previosState) => {
      const payload: Pizza = {
        imageUrl: 'url',
        title: 'Test',
        type: 0,
        size: 23,
        price: 500,
      };

      const expectedState: CartPizzasState = {
        items: [...previosState.items, { value: payload, number: 1 }],
        numberItems: previosState.numberItems + 1,
        totalPrice: previosState.totalPrice + payload.price,
      };

      const result = cartReducer(previosState, addPizzaToCart(payload));

      expect(result).toEqual(expectedState);
    });
  });

  test('should add existing item to cart with "addPizzaToCart" action', () => {
    const previosState = {
      items: [
        {
          value: {
            imageUrl: 'url',
            title: 'Test',
            type: 0,
            size: 23,
            price: 500,
          },
          number: 1,
        },
      ],
      numberItems: 1,
      totalPrice: 500,
    };

    const payload: Pizza = {
      imageUrl: 'url',
      title: 'Test',
      type: 0,
      size: 23,
      price: 500,
    };

    const expectedState = {
      items: [
        {
          value: {
            imageUrl: 'url',
            title: 'Test',
            type: 0,
            size: 23,
            price: 500,
          },
          number: 2,
        },
      ],
      numberItems: 2,
      totalPrice: 1000,
    };

    const result = cartReducer(previosState, addPizzaToCart(payload));

    expect(result).toEqual(expectedState);
  });

  test('should remove existing item from cart with "removePizzaFromCart" action', () => {
    const previosState = {
      items: [
        {
          value: {
            imageUrl:
              'https://cdn.papajohns.ru//images/catalog/thumbs/cart/f6375e9bcad722574c764dbcc8181c93.webp',
            title: 'Чеддер Мексикан',
            type: 0,
            size: 30,
            price: 899,
          },
          number: 2,
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
      ],
      numberItems: 3,
      totalPrice: 2697,
    };

    const payload: ICartPizza = {
      value: {
        imageUrl:
          'https://cdn.papajohns.ru//images/catalog/thumbs/cart/f6375e9bcad722574c764dbcc8181c93.webp',
        title: 'Чеддер Мексикан',
        type: 0,
        size: 30,
        price: 899,
      },
      number: 2,
    };

    const expectedState = {
      items: [
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
      ],
      numberItems: 1,
      totalPrice: 899,
    };

    const result = cartReducer(previosState, removePizzaFromCart(payload));

    expect(result).toEqual(expectedState);
  });

  test('should change number of items in payload item on payload difference from cart with "changeNumberPizza" action', () => {
    const previosState = {
      items: [
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
      ],
      numberItems: 1,
      totalPrice: 899,
    };

    const payloadItem: ICartPizza = {
      value: {
        imageUrl:
          'https://cdn.papajohns.ru//images/catalog/thumbs/cart/c3801183d9a96b1a7ad600c11add2d83.webp',
        title: 'Чеддер Чизбургер',
        type: 0,
        size: 30,
        price: 899,
      },
      number: 1,
    };

    const expectedState = {
      items: [
        {
          value: {
            imageUrl:
              'https://cdn.papajohns.ru//images/catalog/thumbs/cart/c3801183d9a96b1a7ad600c11add2d83.webp',
            title: 'Чеддер Чизбургер',
            type: 0,
            size: 30,
            price: 899,
          },
          number: 0,
        },
      ],
      numberItems: 0,
      totalPrice: 0,
    };

    const result = cartReducer(
      previosState,
      changeNumberPizza({ item: payloadItem, difference: -1 }),
    );

    expect(result).toEqual(expectedState);
  });
});
