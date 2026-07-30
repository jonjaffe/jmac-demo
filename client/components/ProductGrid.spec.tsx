import { describe, it, expect } from "vitest";
import { renderWithProviders, screen } from "@/test/test-utils";
import ProductGrid, { Product } from "./ProductGrid";

const products: Product[] = [
  {
    id: 1,
    name: "Classic Cotton Shirt",
    price: 128,
    image: "https://example.com/shirt.jpg",
    category: "Men",
    isNew: true,
  },
  {
    id: 2,
    name: "Linen Dress",
    price: 198,
    originalPrice: 248,
    image: "https://example.com/dress.jpg",
    category: "Women",
  },
];

describe("ProductGrid", () => {
  it("renders section title and products", () => {
    renderWithProviders(
      <ProductGrid title="Featured Pieces" products={products} />,
    );
    expect(
      screen.getByRole("heading", { name: "Featured Pieces" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Classic Cotton Shirt")).toBeInTheDocument();
    expect(screen.getByText("Linen Dress")).toBeInTheDocument();
  });

  it("formats prices", () => {
    renderWithProviders(<ProductGrid products={products} showViewAllButton={false} />);
    expect(screen.getByText("$128")).toBeInTheDocument();
    expect(screen.getByText("$198")).toBeInTheDocument();
    expect(screen.getByText("$248")).toBeInTheDocument();
  });

  it("shows New badge for new products", () => {
    renderWithProviders(<ProductGrid products={products} showViewAllButton={false} />);
    expect(screen.getByText("New")).toBeInTheDocument();
  });
});
