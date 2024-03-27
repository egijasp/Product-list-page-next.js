import { FC } from "react";
import Button from "../button/button";

// type ButtonProps = {
//   $isActive: boolean;
// };

type PaginationProps = {
  productsAmount: number;
  productsPerPage: number;
  currentPage: number;
  onPaginate: (page: number) => void;
};

const Pagination: FC<PaginationProps> = ({
  productsAmount,
  currentPage,
  productsPerPage,
  onPaginate,
}) => {
  const pagesCount = Math.ceil(productsAmount / productsPerPage);

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div className="flex flex-row justify-center m-6">
      <div
        style={{
          width: "130px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {pages.map((page) => (
          <Button key={page} page={page} onPaginate={() => onPaginate(page)} />
        ))}
      </div>
    </div>
  );
};

export default Pagination;
