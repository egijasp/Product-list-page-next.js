import ProductPage from "@/components/productPage/productpage";
import getProduct from "@/lib/actions/product";

const Product = async ({ params }: { params: { productId: string } }) => {
  const product = await getProduct(Number(params.productId));

  return (
    <>
      <ProductPage product={product} />
    </>
  );
};

export default Product;
