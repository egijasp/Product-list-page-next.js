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

  useEffect(() => {
    setCurrentPage(1);
  }, [products]);

  const onPaginateHandler = (page: number) => {
    setCurrentPage(page);
  };

  const productsPerPage = 10;

  const lastIndexOfProducts = currentPage * productsPerPage;
  const firstIndexOfProducts = lastIndexOfProducts - productsPerPage;
  const currentProducts = products.slice(
    firstIndexOfProducts,
    lastIndexOfProducts,
  );

  return (
    <>
      <Input placeholder="Search products..." />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {currentProducts.length < 1 ? (
          <div>Nothing found</div>
        ) : (
          currentProducts?.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <ProductCard product={product} />
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
    </>
  );
};

export default ProductList;
