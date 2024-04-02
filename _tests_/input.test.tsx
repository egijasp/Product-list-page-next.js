import Input from "@/components/input/input";
import { render, screen, waitFor } from "@testing-library/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import userEvent from "@testing-library/user-event";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
}));

(useRouter as jest.Mock).mockReturnValue({
  replace: jest.fn(),
});
(usePathname as jest.Mock).mockReturnValue("example.com");
(useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());

describe("Input", () => {
  it("should render an input", () => {
    render(<Input placeholder="Search for products" />);

    expect(
      screen.getByPlaceholderText("Search for products"),
    ).toBeInTheDocument();
  });

  it("should be able to add text to the input", async () => {
    render(<Input placeholder="Search for products" />);
    const input = screen.getByPlaceholderText("Search for products");
    await userEvent.type(input, "apple");

    expect(input).toHaveValue("apple");
  });

  it("updates search query in URL on input change", async () => {
    render(<Input placeholder="Search for products" />);
    const input = screen.getByPlaceholderText("Search for products");
    await userEvent.type(input, "apple");

    await waitFor(() => {
      expect(useRouter().replace).toHaveBeenCalledWith(
        "example.com?page=1&query=apple",
      );
    });
  });

  it("sets defaultValue correctly", () => {
    (useSearchParams as jest.Mock).mockReturnValue(
      new URLSearchParams("query=apple"),
    );
    render(<Input placeholder="Search for products" />);
    const input = screen.getByPlaceholderText("Search for products");
    expect(input).toHaveValue("apple");
  });
});
