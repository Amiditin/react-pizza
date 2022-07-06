import cartReducer, {
  setPizzasToCart,
  addPizzaToCart,
  removePizzaFromCart,
  clearCart,
  changeNumberPizza,
} from './slice';
import { Pizza, ICartPizza, ICartChangePizza, CartPizzasState } from './types';
import { cartItemsCases } from '../../utils/constans/tests';

describe('cartSlice', () => {
  const initialState: CartPizzasState = { items: [], numberItems: 0, totalPrice: 0 };

  const { oneItem, threeSameItems, randomNumberItems } = cartItemsCases;

  test('should return the initial state', () => {
    const result = cartReducer(undefined, { type: '' });

    expect(result).toEqual(initialState);
  });

  test('should set up state equal payload items with "setPizzasToCart" action', () => {
    Object.values(cartItemsCases).forEach((previosState) => {
      Object.values(cartItemsCases).forEach((expectedState) => {
        const result = cartReducer(previosState, setPizzasToCart(expectedState.items));
        expect(result).toEqual(expectedState);
      });
    });
  });

  test('should clear a existing state to initial state with "clearCart" action', () => {
    Object.values(cartItemsCases).forEach((previosState) => {
      const result = cartReducer(previosState, clearCart());

      expect(result).toEqual(initialState);
    });
  });

  test('should add new item to cart with "addPizzaToCart" action', () => {
    Object.values(cartItemsCases).forEach((previosState) => {
      const payload: Pizza = {
        imageUrl: 'https://mysite.com/images/img.webp',
        title: 'Test',
        type: 0,
        size: 30,
        price: 800,
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
    const previosState: CartPizzasState = oneItem;
    const payload: Pizza = oneItem.items[0].value;
    const expectedState: CartPizzasState = {
      items: [{ value: payload, number: previosState.items[0].number + 1 }],
      numberItems: previosState.numberItems + 1,
      totalPrice: previosState.totalPrice + payload.price,
    };
    const result = cartReducer(previosState, addPizzaToCart(payload));

    expect(result).toEqual(expectedState);
  });

  test('should remove existing item from cart with "removePizzaFromCart" action', () => {
    interface ICases {
      previosState: CartPizzasState;
      payload: ICartPizza;
      expectedState: CartPizzasState;
    }

    const cases: ICases[] = [
      {
        previosState: oneItem,
        payload: oneItem.items[0],
        expectedState: initialState,
      },
      {
        previosState: threeSameItems,
        payload: threeSameItems.items[0],
        expectedState: initialState,
      },
      {
        previosState: randomNumberItems,
        payload: randomNumberItems.items[0],
        expectedState: {
          items: randomNumberItems.items.slice(1),
          numberItems: 7 - 1,
          totalPrice: 6169 - 599,
        },
      },
    ];

    cases.forEach((item) => {
      const result = cartReducer(item.previosState, removePizzaFromCart(item.payload));

      expect(result).toEqual(item.expectedState);
    });
  });

  test('should change number of items in payload item to payload difference from cart with "changeNumberPizza" action', () => {
    interface ICases {
      previosState: CartPizzasState;
      payload: ICartChangePizza;
      expectedState: CartPizzasState;
    }

    const cases: ICases[] = [
      {
        previosState: oneItem,
        payload: { item: oneItem.items[0], difference: -1 },
        expectedState: {
          items: [{ value: oneItem.items[0].value, number: 0 }],
          numberItems: 0,
          totalPrice: 0,
        },
      },
      {
        previosState: oneItem,
        payload: { item: oneItem.items[0], difference: 1 },
        expectedState: {
          items: [{ value: oneItem.items[0].value, number: 2 }],
          numberItems: 2,
          totalPrice: 599 + 599,
        },
      },
      {
        previosState: threeSameItems,
        payload: { item: threeSameItems.items[0], difference: -1 },
        expectedState: {
          items: [{ value: threeSameItems.items[0].value, number: 2 }],
          numberItems: 2,
          totalPrice: 1797 - 599,
        },
      },
      {
        previosState: threeSameItems,
        payload: { item: threeSameItems.items[0], difference: 1 },
        expectedState: {
          items: [{ value: threeSameItems.items[0].value, number: 4 }],
          numberItems: 4,
          totalPrice: 1797 + 599,
        },
      },
      {
        previosState: randomNumberItems,
        payload: { item: randomNumberItems.items[0], difference: -1 },
        expectedState: {
          items: [
            { value: randomNumberItems.items[0].value, number: 0 },
            ...randomNumberItems.items.slice(1),
          ],
          numberItems: 7 - 1,
          totalPrice: 6169 - 599,
        },
      },
      {
        previosState: randomNumberItems,
        payload: { item: randomNumberItems.items[0], difference: 1 },
        expectedState: {
          items: [
            { value: randomNumberItems.items[0].value, number: 2 },
            ...randomNumberItems.items.slice(1),
          ],
          numberItems: 7 + 1,
          totalPrice: 6169 + 599,
        },
      },
    ];

    cases.forEach((item) => {
      const result = cartReducer(item.previosState, changeNumberPizza(item.payload));

      expect(result).toEqual(item.expectedState);
    });
  });
});
