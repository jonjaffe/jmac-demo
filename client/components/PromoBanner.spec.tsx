import { describe, it, expect } from "vitest";
import { renderWithProviders, screen } from "@/test/test-utils";
import userEvent from "@testing-library/user-event";
import PromoBanner from "./PromoBanner";

describe("PromoBanner", () => {
  it("renders the promotion message and default sale link", () => {
    renderWithProviders(
      <PromoBanner message="Spring sale: enjoy complimentary shipping on orders over $150." />,
    );

    expect(
      screen.getByRole("region", { name: "Promotion" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Spring sale: enjoy complimentary shipping/i),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Shop sale" })).toHaveAttribute(
      "href",
      "/collections/sale",
    );
  });

  it("supports custom link href and label", () => {
    renderWithProviders(
      <PromoBanner
        message="Limited-time offer."
        href="/collections/new-arrivals"
        linkLabel="Shop new arrivals"
      />,
    );

    expect(
      screen.getByRole("link", { name: "Shop new arrivals" }),
    ).toHaveAttribute("href", "/collections/new-arrivals");
  });

  it("dismisses the banner when the close button is clicked", async () => {
    const user = userEvent.setup();
    renderWithProviders(<PromoBanner message="Limited-time offer." />);

    await user.click(
      screen.getByRole("button", { name: "Dismiss promotion" }),
    );

    expect(
      screen.queryByRole("region", { name: "Promotion" }),
    ).not.toBeInTheDocument();
  });
});
