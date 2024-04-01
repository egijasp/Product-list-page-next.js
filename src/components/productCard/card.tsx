import { Product } from "@/types/products";
import { FC } from "react";

type ProductCardProps = {
  product?: Product;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => (
  
    <div className="self-center">
      <h5 className="font-bold">{product?.name}</h5>
      <div>
      <span className="text-xs pr-1.5">price:</span> 
      <span className="font-mono">{product?.price} {product?.currency}
      </span>
      </div>
      <div className="text-xs">
          <span className="pr-1.5">category:</span> 
          <span>{product?.category}</span>
          </div>
    </div>
  
);

export default ProductCard;
