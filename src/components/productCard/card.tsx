import { Product } from "@/types/products";
import { FC } from "react";

type ProductCardProps = {
  product?: Product;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => (
  <div data-testid="card" className="self-center">
    <h5 className="font-bold">{product?.title}</h5>
    <div>
      <span className="text-xs pr-1.5">price:</span>
      <span className="font-mono">{product?.price} EUR</span>
    </div>
    <div className="text-xs">
      <span className="pr-1.5">category:</span>
      <span>{product?.category}</span>
    </div>
  </div>
);

export default ProductCard;
