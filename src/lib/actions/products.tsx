import { Product } from "@/types/products";

export default async function getProducts(query: string): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products");

  const data: Product[] = await res.json();

  if (!query) {
    return data;
  }

  if (!res.ok) {
    throw new Error("No data found");
  }

  return data.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase()),
  );
}
