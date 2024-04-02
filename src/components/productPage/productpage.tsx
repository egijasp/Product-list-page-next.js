import { Product } from "@/types/products";
import ProductCard from "../productCard/card";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  product?: Product;
}

const ProductPage: FC<ProductProps> = ({ product }) => (
  <>
    <div className="grid sm:grid-cols-2 gap-6 border p-4">
      <div className="sm:col-span-2">
        <Link data-testid="link" href="/">
          <span className="hover:underline">&lt; to Products</span>
        </Link>
      </div>
      <Image
        className="justify-self-center w-60 md:w-80"
        src="/placeholder.jpg"
        alt="product"
        width={300}
        height={200}
      />
      <ProductCard product={product} />
      <div className="sm:col-span-2 gap4">
        <div className="pb-2">
          <strong>Description</strong>
        </div>
        <p>{product?.description}</p>
      </div>
    </div>
  </>
);

export default ProductPage;
