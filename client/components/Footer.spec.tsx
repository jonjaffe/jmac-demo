import { describe, it, expect } from "vitest";
import { renderWithProviders, screen } from "@/test/test-utils";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders shop links", () => {
    renderWithProviders(<Footer />);
    expect(screen.getByRole("heading", { name: "Shop" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Women" })).toHaveAttribute(
      "href",
      "/collections/women",
    );
  });

  it("renders brand name", () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText("McLaughlin & Co.")).toBeInTheDocument();
  });

  it("hides newsletter by default", () => {
    renderWithProviders(<Footer />);
    expect(screen.queryByText("Stay in Touch")).not.toBeInTheDocument();
  });

  it("shows newsletter when showStayInTouch is true", () => {
    renderWithProviders(<Footer showStayInTouch />);
    expect(screen.getByText("Stay in Touch")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter your email")).toBeInTheDocument();
  });
});
