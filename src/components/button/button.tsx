import { FC } from "react";

interface ButtonProps {
  page: number;
  onPaginate: (page: number) => void;
}
const Button: FC<ButtonProps> = ({ page, onPaginate }) => (
  <button
    key={page}
    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 
    ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-20 focus:outline-offset-0 active:bg-gray-400"
    onClick={() => onPaginate(page)}
  >
    {page}
  </button>
);

export default Button;
