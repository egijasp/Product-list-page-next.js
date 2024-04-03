import ProductsPage from "@/components/productsPage/productsPage";
import { mockData } from "@/lib/mockData/mockData";
import { render, screen } from "@testing-library/react";
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

describe("ProductsPage", () => {
  it("should render a product page", () => {
    render(<ProductsPage currentPage={1} products={mockData} />);

    expect(screen.getByText("Apple")).toBeInTheDocument();
  });

  it("should render a 'Nothing Found' when the array is empty", () => {
    render(<ProductsPage currentPage={1} products={[]} />);

    expect(screen.getByText("Nothing found")).toBeInTheDocument();
  });

  it("should render correct amount of products", () => {
    render(<ProductsPage currentPage={1} products={mockData} />);

    const products = screen.getAllByTestId("card");
    expect(products.length).toBe(3);
  });

  it("should have correct href", async () => {
    render(<ProductsPage currentPage={1} products={mockData} />);

    const links = screen.getAllByTestId("link");

    expect(links[0]).toHaveAttribute("href", "/product/1");
  });
});
