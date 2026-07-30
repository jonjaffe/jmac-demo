import { describe, it, expect } from "vitest";
import { renderWithProviders, screen } from "@/test/test-utils";
import userEvent from "@testing-library/user-event";
import Navigation from "./Navigation";

describe("Navigation", () => {
  it("renders the brand name", () => {
    renderWithProviders(<Navigation />);
    expect(screen.getByText("McLaughlin & Co.")).toBeInTheDocument();
  });

  it("renders main nav items from navigation data", () => {
    renderWithProviders(<Navigation />);
    expect(screen.getByRole("link", { name: "Women" })).toHaveAttribute(
      "href",
      "/collections/women",
    );
    expect(screen.getByRole("link", { name: "Men" })).toHaveAttribute(
      "href",
      "/collections/men",
    );
  });

  it("opens search input when search button is clicked", async () => {
    const user = userEvent.setup();
    renderWithProviders(<Navigation />);
    const searchButtons = screen.getAllByRole("button");
    const searchButton = searchButtons.find((btn) =>
      btn.querySelector("svg.lucide-search"),
    );
    expect(searchButton).toBeTruthy();
    await user.click(searchButton!);
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  it("links the account button to /admin", () => {
    renderWithProviders(<Navigation />);
    const adminLink = screen.getByRole("link", { name: /account|admin/i });
    expect(adminLink).toHaveAttribute("href", "/admin");
  });
});
