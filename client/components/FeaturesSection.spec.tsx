import { describe, it, expect } from "vitest";
import { renderWithProviders, screen } from "@/test/test-utils";
import FeaturesSection from "./FeaturesSection";

describe("FeaturesSection", () => {
  it("renders provided features", () => {
    renderWithProviders(
      <FeaturesSection
        features={[
          { icon: "🚚", title: "Free Shipping", description: "On orders over $150" },
          { icon: "🔄", title: "Easy Returns", description: "30-day return policy" },
        ]}
      />,
    );
    expect(screen.getByText("Free Shipping")).toBeInTheDocument();
    expect(screen.getByText("On orders over $150")).toBeInTheDocument();
    expect(screen.getByText("Easy Returns")).toBeInTheDocument();
  });
});
