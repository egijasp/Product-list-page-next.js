"use client";

import { FC } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

type PaginationProps = {
  productsAmount: number;
  productsPerPage: number;
  currentPage: number;
};

const Pagination: FC<PaginationProps> = ({
  productsAmount,
  productsPerPage,
  currentPage,
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pagesCount = Math.ceil(productsAmount / productsPerPage);

  const formatPageURL = (page: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    return `${pathname}?${params.toString()}`;
  };

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div className="flex justify-center m-6">
      {pages.map((page) => (
        <Link key={page} href={formatPageURL(page)}>
          <div
            className={`${currentPage === page && "bg-gray-300 hover:bg-gray-300"} relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 
    ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-20 focus:outline-offset-0`}
          >
            {page}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
