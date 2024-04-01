import ProductList from "@/components/productlist/list";
import getProducts from "../lib/actions/products";
import Header from "@/components/header/header";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";

  const filteredProducts = await getProducts(query);

  return (
      <ProductList products={filteredProducts} />
  );
}
