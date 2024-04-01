"use client";

import { Product } from "@/types/products";
import Link from "next/link";
import { useEffect, useState } from "react";
import Input from "../input/input";
import Pagination from "../pagination/pagination";
import ProductCard from "../productCard/card";

interface ProductListProps {
  products: Product[];
  currentPage?: number;
}

const ProductList = ({ products }: ProductListProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 6;
  useEffect(() => {
    setCurrentPage(1);
  }, [products]);

  const onPaginateHandler = (page: number) => {
    setCurrentPage(page);
  };


  const lastIndexOfProducts = currentPage * productsPerPage;
  const firstIndexOfProducts = lastIndexOfProducts - productsPerPage;
  const currentProducts = products.slice(
    firstIndexOfProducts,
    lastIndexOfProducts,
  );

  return (
    <div className="py-3">
      <Input placeholder="Search products..." />
      <div className="grid content-start sm:grid-cols-2 md:grid-cols-3 gap-6 py-2 min-h-[300px]">
        {currentProducts.length < 1 ? (
          <div>Nothing found</div>
        ) : (
          currentProducts?.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <div className="border rounded shadow grid  px-5 py-3 transition duration-700 ease-in-out  hover:scale-105 h-full space-y-2">
              <ProductCard product={product} />
              </div>
            </Link>
          ))
        )}
      </div>
      <Pagination
        productsAmount={products.length}
        productsPerPage={productsPerPage}
        onPaginate={onPaginateHandler}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ProductList;
