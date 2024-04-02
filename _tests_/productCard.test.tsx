import "@testing-library/jest-dom";
import ProductCard from "@/components/productCard/card";
import { render, screen } from "@testing-library/react";

const product = {
  id: 1,
  title: "Apple",
  price: 1.1,
  category: "Fruits",
  description: "Fresh and delicious apples from the local orchard.",
};

describe("ProductCard", () => {
  it("should render a product card", () => {
    render(<ProductCard product={product} />);

    expect(screen.getByText(product.title)).toBeInTheDocument();
    expect(screen.getByText(`${product.price} EUR`)).toBeInTheDocument();
    expect(screen.getByText(product.category)).toBeInTheDocument();
  });
});
