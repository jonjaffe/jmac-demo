import { describe, it, expect } from "vitest";
import { renderWithProviders, screen } from "@/test/test-utils";
import userEvent from "@testing-library/user-event";
import PromoBanner from "./PromoBanner";

describe("PromoBanner", () => {
  it("renders message and sale link", () => {
    renderWithProviders(
      <PromoBanner message="Free shipping this weekend." />,
    );
    expect(screen.getByText(/Free shipping this weekend/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Shop sale/i })).toHaveAttribute(
      "href",
      "/collections/sale",
    );
  });

  it("dismisses when the close button is clicked", async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <PromoBanner message="Members get early access." />,
    );
    await user.click(screen.getByRole("button", { name: /Dismiss promotion/i }));
    expect(screen.queryByText(/Members get early access/i)).not.toBeInTheDocument();
  });

  it("accepts custom link href and label", () => {
    renderWithProviders(
      <PromoBanner
        message="New arrivals are here."
        href="/collections/new-arrivals"
        linkLabel="Browse now"
      />,
    );
    expect(screen.getByRole("link", { name: /Browse now/i })).toHaveAttribute(
      "href",
      "/collections/new-arrivals",
    );
  });
});
