import Header from "@/components/header/header";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
  it("should render a header", () => {
    render(<Header />);

    expect(screen.getByText("Products list page")).toBeInTheDocument();
  });
});
