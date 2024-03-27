import { Data } from "@/types/products";

const ProductDetails = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const response = await fetch(
    "https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd",
  );

  const data: Data = await response.json();
  const product = data.products.find(
    (value) => value.id === Number(params.productId),
  );

  return (
    <>
      <div className="container  flex flex-col">
        <h5 className="font-bold">{product?.category}</h5>
        <span>{product?.name}</span>
        <span>{product?.description}</span>
        <span>
          {product?.price} {product?.currency}
        </span>
      </div>
    </>
  );
};

export default ProductDetails;
