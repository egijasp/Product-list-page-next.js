import getProducts from "@/lib/actions/products";
import { mockData } from "@/lib/mockData/mockData";

jest.mock("src/lib/actions/products");

describe("getProducts", () => {
  it("should return an array of all products ", async () => {
    (getProducts as jest.Mock).mockResolvedValue(mockData);

    const products = await getProducts("");

    expect(products).toEqual(mockData);
  });

  it("should return an array of filtered products", async () => {
    (getProducts as jest.Mock).mockResolvedValue([mockData[0]]);

    const products = await getProducts("apple");

    expect(products).toEqual([mockData[0]]);
  });

  it("should return an empty array if no products are found", async () => {
    (getProducts as jest.Mock).mockResolvedValue([]);

    const products = await getProducts("orange");

    expect(products).toEqual([]);
  });
});
