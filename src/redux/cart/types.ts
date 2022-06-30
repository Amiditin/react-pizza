export interface IPizza {
  imageUrl: string;
  title: string;
  type: number;
  size: number;
  price: number;
}

export interface ICartPizza {
  value: IPizza;
  number: number;
}

export interface ICartPizzas {
  items: ICartPizza[];
  numberItems: number;
  totalPrice: number;
}

export interface ICartChangePizza {
  item: ICartPizza;
  difference: number;
}
