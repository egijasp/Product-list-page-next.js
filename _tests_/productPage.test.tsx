import ProductPage from "@/components/productPage/productpage";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/navigation";

const product = {
  id: 1,
  title: "Apple",
  price: 1.1,
  category: "Fruits",
  description: "Fresh and delicious apples from the local orchard.",
};

describe("ProductPage", () => {
  it("should render a product page", () => {
    render(<ProductPage product={product} />);
    const productCard = screen.getByTestId("card");
    expect(productCard).toBeInTheDocument();
  });

  it("should render a  correct product information", () => {
    render(<ProductPage product={product} />);

    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("1.1 EUR")).toBeInTheDocument();
    expect(screen.getByText("Fruits")).toBeInTheDocument();
    expect(
      screen.getByText("Fresh and delicious apples from the local orchard."),
    ).toBeInTheDocument();
  });

  it('should have link whith href attribute "/"', async () => {
    render(<ProductPage product={product} />);

    const backToProductsLink = screen.getByTestId("link");

    expect(backToProductsLink).toBeInTheDocument();
    expect(backToProductsLink).toHaveAttribute("href", "/");
  });
});
