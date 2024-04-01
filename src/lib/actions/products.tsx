import { Data, Product } from "@/types/products";
import { mockData } from "../mockData/mockData";

export default async function getProducts(query: string): Promise<Product[]> {
  // const res = await fetch(
  //   "https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd",
  // );

  // const data: Data = await res.json();

  return mockData.products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase()),
  );
}
