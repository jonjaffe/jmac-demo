import { RequestHandler } from "express";

interface NavigationItem {
  label: string;
  href: string;
}

interface NavigationResponse {
  mainNavItems: NavigationItem[];
}

export const handleNavigation: RequestHandler = (req, res) => {
  const navResponse: NavigationResponse = {
    mainNavItems: [
      { label: "Women", href: "/collections/women" },
      { label: "Men", href: "/collections/men" },
      { label: "Accessories", href: "/collections/accessories" },
      { label: "Sale", href: "/collections/sale" },
    ]
  };

  res.json(navResponse);
};
