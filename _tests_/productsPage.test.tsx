import ProductsPage from "@/components/productsPage/productsPage";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRouter, useSearchParams } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
}));

(useRouter as jest.Mock).mockReturnValue({
  replace: jest.fn(),
});

(useSearchParams as jest.Mock).mockReturnValue(
  new URLSearchParams("query=apple"),
);

const mockProducts = [
  {
    id: 1,
    title: "Apple",
    price: 1.1,
    category: "Fruits",
    description: "Fresh and delicious apples from the local orchard.",
  },
  {
    id: 2,
    title: "Banana",
    price: 0.65,
    category: "Fruits",
    description: "Ripe and sweet bananas, perfect for a healthy snack.",
  },
  {
    id: 3,
    title: "Chicken Breast",
    price: 3.25,
    category: "Meat",
    description:
      "Boneless and skinless chicken breasts, great for grilling or baking.",
  },
];

describe("ProductsPage", () => {
  it("should render a product page", () => {
    render(<ProductsPage currentPage={1} products={mockProducts} />);

    expect(screen.getByText("Apple")).toBeInTheDocument();
  });

  it("should render a 'Nothing Found' when the array is empty", () => {
    render(<ProductsPage currentPage={1} products={[]} />);

    expect(screen.getByText("Nothing found")).toBeInTheDocument();
  });

  it("should render correct amount of products", () => {
    render(<ProductsPage currentPage={1} products={mockProducts} />);

    const products = screen.getAllByTestId("card");
    expect(products.length).toBe(3);
  });

  it("should have correct href", async () => {
    render(<ProductsPage currentPage={1} products={mockProducts} />);

    const links = screen.getAllByTestId("link");

    expect(links[0]).toHaveAttribute("href", "/product/1");
  });
});
