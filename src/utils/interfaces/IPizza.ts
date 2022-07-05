type SizeType = {
  type: number;
  value: number[];
};

type PriceType = {
  size: number;
  value: number;
};
export default interface IPizza {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  types: number[];
  sizes: SizeType[];
  price: PriceType[];
  category: number[];
  rating: number;
}
