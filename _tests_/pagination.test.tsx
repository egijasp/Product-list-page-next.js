import Pagination from "@/components/pagination/pagination";
import { render, screen } from "@testing-library/react";
import { usePathname, useSearchParams } from "next/navigation";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
}));

describe("Pagination", () => {
  beforeEach(() => {
    (usePathname as jest.Mock).mockReturnValue("/");
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
  });

  it("should not render a pagination if there is only one page", () => {
    render(
      <Pagination productsAmount={6} productsPerPage={6} currentPage={1} />,
    );

    expect(screen.queryByText("1")).not.toBeInTheDocument();
  });

  it("should render a pagination if there is more than one page", () => {
    render(
      <Pagination productsAmount={7} productsPerPage={6} currentPage={1} />,
    );

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("should correctly formats page URL", () => {
    const pagesCount = Math.ceil(20 / 6);
    render(
      <Pagination productsAmount={20} productsPerPage={6} currentPage={1} />,
    );

    const linkElements = screen.getAllByTestId("link");

    expect(linkElements.length).toBe(pagesCount);

    linkElements.forEach((link, index) => {
      expect(link).toHaveAttribute("href", `/?page=${index + 1}`);
    });
  });
});
