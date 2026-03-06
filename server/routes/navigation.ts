import { RequestHandler } from "express";

interface NavigationItem {
  label: string;
  href: string;
}

interface NavigationResponse {
  mainNavItems: NavigationItem[];
}

export const handleNavigation: RequestHandler = async (req, res) => {
  try {
    const response = await fetch(
      `https://api.builder.io/content/v3/content/header-links?apiKey=682a394bdba14b6cac362a194e804089&id=e7b2d50e661a462091698395ab816033`
    );

    if (!response.ok) {
      throw new Error(`Builder.io API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Extract main navigation items from the Builder.io response
    const mainNavItems = data.data?.mainNavItems || [];

    const navResponse: NavigationResponse = {
      mainNavItems
    };

    res.json(navResponse);
  } catch (error) {
    console.error("Error fetching navigation from Builder.io:", error);
    res.status(500).json({
      error: "Failed to fetch navigation",
      mainNavItems: [
        { label: "Women", href: "/collections/women" },
        { label: "Men", href: "/collections/men" },
        { label: "Accessories", href: "/collections/accessories" },
        { label: "Sale", href: "/collections/sale" },
      ]
    });
  }
};
