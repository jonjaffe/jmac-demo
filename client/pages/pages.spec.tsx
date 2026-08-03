import { describe, it, expect, vi } from "vitest";
import { Route, Routes } from "react-router-dom";
import { renderWithProviders, screen } from "@/test/test-utils";
import Index from "./Index";
import Collections from "./Collections";
import Blog from "./Blog";
import NotFound from "./NotFound";

describe("Index page", () => {
  it("renders home hero and featured content", () => {
    renderWithProviders(<Index />);
    expect(screen.getAllByText("McLaughlin & Co.").length).toBeGreaterThan(0);
    expect(screen.getByText(/Shop New Arrivals/i)).toBeInTheDocument();
  });

  it("renders the dismissible promo banner above navigation", () => {
    renderWithProviders(<Index />);
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
});

describe("Collections page", () => {
  it("renders category title from route params", () => {
    renderWithProviders(
      <Routes>
        <Route path="/collections/:category" element={<Collections />} />
      </Routes>,
      { initialEntries: ["/collections/women"] },
    );
    expect(screen.getByRole("heading", { name: /Women/i })).toBeInTheDocument();
  });
});

describe("Blog page", () => {
  it("renders blog listing", () => {
    renderWithProviders(<Blog />);
    expect(
      screen.getByText(/The Art of Layering: Spring Style Guide/i),
    ).toBeInTheDocument();
  });
});

describe("NotFound page", () => {
  it("renders 404 message", () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    renderWithProviders(<NotFound />, { initialEntries: ["/missing-page"] });
    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("Oops! Page not found")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Return to Home/i })).toHaveAttribute(
      "href",
      "/",
    );
    errorSpy.mockRestore();
  });
});
