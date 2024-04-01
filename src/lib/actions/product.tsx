import { Data, Product } from "@/types/products";
import { mockData } from "../mockData/mockData";

export default async function getProduct(
  id: number,
): Promise<Product | undefined> {
  // const res = await fetch(
  //   "https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd",
  // );

  // const data: Data = await res.json();
  return mockData.products.find((value) => value.id === id);
}
