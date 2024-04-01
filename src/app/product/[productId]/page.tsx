import ProductCard from "@/components/productCard/card";
import getProduct from "@/lib/actions/product";
import { Data } from "@/types/products";
import Image from 'next/image'
import Link from "next/link";

const ProductDetails = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const product = await getProduct(Number(params.productId))

  return (
    <>
      <div className="grid sm:grid-cols-2 gap-6 border p-4">
        <div className="sm:col-span-2">
          <Link href="/">
            <span className="hover:underline">&lt; to Products</span>

          </Link>
        </div>
          <Image className="justify-self-center w-72 md:w-80" src="/placeholder.jpg" alt="product" width={300} height={200}/>
          <ProductCard product={product} />
        <div className="sm:col-span-2 gap4">
          <div className="pb-2"><strong>Description</strong></div>
        <p>{product?.description}</p></div>
      </div>
    </>
  );
};

export default ProductDetails;
