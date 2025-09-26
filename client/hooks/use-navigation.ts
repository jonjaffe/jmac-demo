import { useState, useEffect } from 'react';

interface NavigationItem {
  label: string;
  href: string;
}

interface NavigationData {
  mainNavItems: NavigationItem[];
}

const useNavigation = () => {
  const [navigationData, setNavigationData] = useState<NavigationData>({
    mainNavItems: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNavigation = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.builder.io/content/v3/content/header-links?apiKey=682a394bdba14b6cac362a194e804089&id=e7b2d50e661a462091698395ab816033`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        // Extract only main navigation items from the Builder.io response
        const mainNavItems = data.data?.mainNavItems || [];

        setNavigationData({
          mainNavItems
        });
      } catch (err) {
        console.error('Error fetching navigation:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch navigation');
        
        // Fallback to default main navigation items only
        setNavigationData({
          mainNavItems: [
            { label: "Women", href: "/collections/women" },
            { label: "Men", href: "/collections/men" },
            { label: "Accessories", href: "/collections/accessories" },
            { label: "Sale", href: "/collections/sale" },
          ]
        });
      } finally {
        setLoading(false);
      }
    };

    fetchNavigation();
  }, []);

  return { navigationData, loading, error };
};

export default useNavigation; 