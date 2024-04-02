import { Product } from "@/types/products";
import Link from "next/link";
import Input from "../input/input";
import Pagination from "../pagination/pagination";
import ProductCard from "../productCard/card";
import { FC } from "react";

interface ProductListProps {
  products: Product[];
  currentPage: number;
}

const ProductsPage: FC<ProductListProps> = ({ products, currentPage }) => {
  const productsPerPage = 4;

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const currentProducts = products.slice(firstIndex, lastIndex);

  return (
    <div className="py-3">
      <Input placeholder="Search products..." />
      {currentProducts.length < 1 ? (
        <div className="text-center py-16 text-3xl">Nothing found</div>
      ) : (
        <div className="grid content-start sm:grid-cols-2 grid-rows-4 sm:grid-rows-2 gap-6 py-2 min-h-[300px]">
          {currentProducts?.map((product) => (
            <Link
              data-testid="link"
              key={product.id}
              href={`/product/${product.id}`}
            >
              <div className="border rounded shadow hover:shadow-lg grid px-5 py-3 transition duration-700 ease-in-out hover:scale-105 h-full">
                <ProductCard product={product} />
              </div>
            </Link>
          ))}
        </div>
      )}
      <Pagination
        productsAmount={products.length}
        productsPerPage={productsPerPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ProductsPage;
