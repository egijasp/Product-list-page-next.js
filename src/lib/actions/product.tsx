import { Product } from "@/types/products";

export default async function getProduct(
  id: number,
): Promise<Product | undefined> {
  const res = await fetch("https://fakestoreapi.com/products");

  const data: Product[] = await res.json();
  return data.find((value) => value.id === id);
}
