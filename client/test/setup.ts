import "@testing-library/jest-dom/vitest";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

class ResizeObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}

vi.stubGlobal("ResizeObserver", ResizeObserverStub);

afterEach(() => {
  cleanup();
});

vi.mock("@/hooks/use-navigation", () => ({
  default: () => ({
    navigationData: {
      mainNavItems: [
        { label: "Women", href: "/collections/women" },
        { label: "Men", href: "/collections/men" },
        { label: "Accessories", href: "/collections/accessories" },
        { label: "Sale", href: "/collections/sale" },
      ],
    },
    loading: false,
    error: null,
  }),
}));
