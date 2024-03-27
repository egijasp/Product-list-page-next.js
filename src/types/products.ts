export type Data = {
  products: Product[];
};

export type Product = {
  id: number;
  name: string;
  price: number;
  currency: string;
  category: string;
  description: string;
};
