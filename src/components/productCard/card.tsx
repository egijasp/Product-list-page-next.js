import { Product } from "@/types/products";
import { FC } from "react";

type ProductCardProps = {
  product?: Product;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => (
  <>
    <div className="container border rounded shadow flex flex-col p-3">
      <h5 className="font-bold">{product?.category}</h5>
      <span>{product?.name}</span>
      <span>
        {product?.price} {product?.currency}
      </span>
    </div>
  </>
);

export default ProductCard;
