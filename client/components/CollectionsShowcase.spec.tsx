import { describe, it, expect } from "vitest";
import { renderWithProviders, screen } from "@/test/test-utils";
import CollectionsShowcase, { Collection } from "./CollectionsShowcase";

const collections: Collection[] = [
  {
    title: "Women",
    description: "Effortless elegance",
    image: "https://example.com/women.jpg",
    href: "/collections/women",
  },
  {
    title: "Men",
    description: "Modern classics",
    image: "https://example.com/men.jpg",
    href: "/collections/men",
  },
];

describe("CollectionsShowcase", () => {
  it("renders title, description, and collections", () => {
    renderWithProviders(
      <CollectionsShowcase
        title="Shop by Collection"
        description="Explore our curated collections"
        collections={collections}
      />,
    );
    expect(
      screen.getByRole("heading", { name: "Shop by Collection" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Explore our curated collections"),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Women" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Women/i })).toHaveAttribute(
      "href",
      "/collections/women",
    );
  });
});
