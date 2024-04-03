import getProduct from "@/lib/actions/product";
import { mockData } from "@/lib/mockData/mockData";

jest.mock("src/lib/actions/product");

describe("getProduct", () => {
  it("should return a single product", async () => {
    (getProduct as jest.Mock).mockResolvedValue([mockData[0]]);

    const product = await getProduct(1);

    expect(product).toEqual([mockData[0]]);
  });

  it("should return an empty array if no product is found", async () => {
    (getProduct as jest.Mock).mockResolvedValue([]);

    const product = await getProduct(6);

    expect(product).toEqual([]);
  });
});
