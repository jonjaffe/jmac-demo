import { describe, it, expect } from "vitest";
import { renderWithProviders, screen } from "@/test/test-utils";
import CallToActionSection from "./CallToActionSection";

describe("CallToActionSection", () => {
  it("renders title, description, and buttons", () => {
    renderWithProviders(
      <CallToActionSection
        title="The Summer Style Guide"
        description="Discover the perfect pieces for warm weather."
        buttons={[{ text: "Explore the Guide", href: "/style-guide" }]}
        badge="Style Guide"
      />,
    );
    expect(
      screen.getByRole("heading", { name: "The Summer Style Guide" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Discover the perfect pieces for warm weather."),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Explore the Guide/i }),
    ).toHaveAttribute("href", "/style-guide");
    expect(screen.getByText("Style Guide")).toBeInTheDocument();
  });

  it("supports centered layout", () => {
    renderWithProviders(
      <CallToActionSection
        layout="centered"
        title="Join Us"
        description="Become part of the story."
        buttons={[{ text: "Learn More", href: "/about" }]}
      />,
    );
    expect(screen.getByRole("heading", { name: "Join Us" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Learn More/i })).toHaveAttribute(
      "href",
      "/about",
    );
  });
});
