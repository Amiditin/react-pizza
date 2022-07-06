export type Pizza = {
  imageUrl: string;
  title: string;
  type: number;
  size: number;
  price: number;
};

export interface ICartPizza {
  value: Pizza;
  number: number;
}

export interface ICartChangePizza {
  item: ICartPizza;
  difference: -1 | 1;
}
export interface CartPizzasState {
  items: ICartPizza[];
  numberItems: number;
  totalPrice: number;
}
