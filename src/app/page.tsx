import getProducts from "../lib/actions/products";
import ProductsPage from "@/components/productsPage/productsPage";

export default async function Home({
  searchParams,
}: {
  searchParams: { query: string; page: string };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const filteredProducts = await getProducts(query);

  return <ProductsPage products={filteredProducts} currentPage={currentPage} />;
}
