import ProductList from "@/components/productlist/list";
import getProducts from "../lib/actions/products";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";

  // const currentPage = Number(searchParams?.page) || 1;

  const filteredProducts = await getProducts(query);

  return (
    <div className="container mx-auto p-4">
      <ProductList products={filteredProducts} />
    </div>
  );
}
