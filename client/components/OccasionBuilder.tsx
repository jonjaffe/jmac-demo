import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Zap } from "lucide-react";

type StyleProfile = {
  colorPalette: string;
  silhouette: string;
  printAffinity: string;
  lifestyle: string;
  archetype: string;
};

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
};

type Look = {
  id: string;
  occasion: string;
  name: string;
  description: string;
  pieces: Product[];
};

const OCCASIONS = [
  {
    id: "wedding",
    name: "Wedding Guest",
    icon: "👰",
  },
  {
    id: "garden",
    name: "Garden Party",
    icon: "🌺",
  },
  {
    id: "office",
    name: "Office Hours",
    icon: "💼",
  },
  {
    id: "vacation",
    name: "Vacation & Resort",
    icon: "✈️",
  },
];

const MOCK_PRODUCTS: Record<string, Product[]> = {
  wedding: [
    {
      id: 101,
      name: "Elegant Midi Dress",
      price: 298,
      category: "Dresses",
      image:
        "https://images.pexels.com/photos/1887465/pexels-photo-1887465.jpeg",
    },
    {
      id: 102,
      name: "Pearl Clutch",
      price: 145,
      category: "Accessories",
      image:
        "https://images.pexels.com/photos/3796689/pexels-photo-3796689.jpeg",
    },
    {
      id: 103,
      name: "Strappy Heels",
      price: 178,
      category: "Shoes",
      image:
        "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg",
    },
  ],
  garden: [
    {
      id: 201,
      name: "Floral Print Sundress",
      price: 228,
      category: "Dresses",
      image:
        "https://images.pexels.com/photos/6311288/pexels-photo-6311288.jpeg",
    },
    {
      id: 202,
      name: "Woven Hat",
      price: 89,
      category: "Accessories",
      image:
        "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg",
    },
    {
      id: 203,
      name: "Flat Sandals",
      price: 98,
      category: "Shoes",
      image:
        "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg",
    },
  ],
  office: [
    {
      id: 301,
      name: "Tailored Blazer",
      price: 385,
      category: "Outerwear",
      image:
        "https://images.pexels.com/photos/3622613/pexels-photo-3622613.jpeg",
    },
    {
      id: 302,
      name: "Leather Portfolio",
      price: 425,
      category: "Bags",
      image:
        "https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg",
    },
    {
      id: 303,
      name: "Pointed Toe Pumps",
      price: 195,
      category: "Shoes",
      image:
        "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg",
    },
  ],
  vacation: [
    {
      id: 401,
      name: "Linen Shirt",
      price: 148,
      category: "Tops",
      image:
        "https://images.pexels.com/photos/6276012/pexels-photo-6276012.jpeg",
    },
    {
      id: 402,
      name: "Casual Shorts",
      price: 128,
      category: "Bottoms",
      image:
        "https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg",
    },
    {
      id: 403,
      name: "Comfortable Sneakers",
      price: 118,
      category: "Shoes",
      image:
        "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg",
    },
  ],
};

const LOOKS: Record<string, Look[]> = {
  wedding: [
    {
      id: "wedding-1",
      occasion: "wedding",
      name: "Timeless Elegance",
      description:
        "A classic midi dress paired with minimal jewelry for sophisticated grace.",
      pieces: MOCK_PRODUCTS.wedding,
    },
  ],
  garden: [
    {
      id: "garden-1",
      occasion: "garden",
      name: "Floral Garden",
      description:
        "Embrace the season with a beautiful floral dress and comfortable accessories.",
      pieces: MOCK_PRODUCTS.garden,
    },
  ],
  office: [
    {
      id: "office-1",
      occasion: "office",
      name: "Power Professional",
      description:
        "Sharp tailored pieces that command the boardroom.",
      pieces: MOCK_PRODUCTS.office,
    },
  ],
  vacation: [
    {
      id: "vacation-1",
      occasion: "vacation",
      name: "Breezy Resort",
      description:
        "Light, breathable fabrics perfect for warm climates.",
      pieces: MOCK_PRODUCTS.vacation,
    },
  ],
};

interface OccasionBuilderProps {
  styleProfile: StyleProfile;
}

const OccasionBuilder = ({ styleProfile }: OccasionBuilderProps) => {
  const [selectedOccasion, setSelectedOccasion] = useState<string | null>(null);

  const currentOccasion = OCCASIONS.find((o) => o.id === selectedOccasion);
  const looks = selectedOccasion
    ? LOOKS[selectedOccasion] || []
    : [];

  const handleAddToCart = (look: Look) => {
    const itemNames = look.pieces.map((p) => p.name).join(", ");
    alert(`Added to cart: ${itemNames}\n\nLook: ${look.name}`);
  };

  if (!selectedOccasion) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-serif font-bold mb-2">
            Select an Occasion
          </h2>
          <p className="text-muted-foreground">
            Choose an occasion and we'll show you curated looks tailored to your style.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {OCCASIONS.map((occasion) => (
            <button
              key={occasion.id}
              onClick={() => setSelectedOccasion(occasion.id)}
              className="group"
            >
              <Card className="h-full border-2 transition-all hover:border-primary hover:shadow-lg cursor-pointer">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                  <div className="text-4xl mb-3">{occasion.icon}</div>
                  <p className="font-semibold text-sm">{occasion.name}</p>
                </CardContent>
              </Card>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <button
            onClick={() => setSelectedOccasion(null)}
            className="text-primary hover:underline mb-2 text-sm"
          >
            ← Back to Occasions
          </button>
          <h2 className="text-3xl font-serif font-bold">
            {currentOccasion?.icon} {currentOccasion?.name}
          </h2>
          <p className="text-muted-foreground">
            Curated for your {styleProfile.archetype} style
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {looks.map((look) => (
          <Card key={look.id} className="overflow-hidden border-2">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl mb-1">{look.name}</CardTitle>
                  <CardDescription>{look.description}</CardDescription>
                </div>
                <Badge variant="outline">{look.pieces.length} pieces</Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {look.pieces.map((product) => (
                  <div key={product.id} className="group">
                    <div className="aspect-square overflow-hidden rounded-lg bg-muted mb-2">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <h4 className="font-semibold text-sm line-clamp-2 mb-1">
                      {product.name}
                    </h4>
                    <p className="text-primary font-semibold">${product.price}</p>
                    <p className="text-xs text-muted-foreground">{product.category}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 pt-4 border-t">
                <Button
                  size="lg"
                  onClick={() => handleAddToCart(look)}
                  className="flex-1"
                >
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Shop the Look ({look.pieces.length} items)
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1"
                >
                  <Zap className="mr-2 h-4 w-4" />
                  Swap Items
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OccasionBuilder;
