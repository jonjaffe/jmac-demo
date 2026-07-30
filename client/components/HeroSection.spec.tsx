import { describe, it, expect } from "vitest";
import { renderWithProviders, screen } from "@/test/test-utils";
import HeroSection from "./HeroSection";

describe("HeroSection", () => {
  const props = {
    title: "Timeless",
    highlightedText: "Essentials",
    description: "Quality clothing for everyday life.",
    image: "https://example.com/hero.jpg",
    imageAlt: "Hero fashion",
  };

  it("renders title and highlighted text", () => {
    renderWithProviders(<HeroSection {...props} />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Timeless Essentials",
    );
    expect(screen.getByText("Essentials")).toBeInTheDocument();
  });

  it("renders description and image", () => {
    renderWithProviders(<HeroSection {...props} />);
    expect(
      screen.getByText("Quality clothing for everyday life."),
    ).toBeInTheDocument();
    expect(screen.getByAltText("Hero fashion")).toHaveAttribute(
      "src",
      props.image,
    );
  });

  it("renders badge when provided", () => {
    renderWithProviders(<HeroSection {...props} badge="New Season" />);
    expect(screen.getByText("New Season")).toBeInTheDocument();
  });

  it("renders default CTA buttons", () => {
    renderWithProviders(<HeroSection {...props} />);
    expect(
      screen.getByRole("link", { name: /Shop New Arrivals/i }),
    ).toHaveAttribute("href", "/collections/new-arrivals");
    expect(
      screen.getByRole("link", { name: /View Style Guide/i }),
    ).toHaveAttribute("href", "/style-guide");
  });
});
