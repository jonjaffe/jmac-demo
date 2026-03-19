import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export interface StyleTheme {
  title: string;
  description: string;
  image: string;
  icon: ReactNode;
  products: string[];
}

interface StyleThemesProps {
  title: string;
  description: string;
  themes: StyleTheme[];
  backgroundColor?: string;
  columns?: "1" | "2" | "3" | "4";
}

const defaultThemes = [
  {
    title: "Coastal Elegance",
    description: "Effortless pieces perfect for seaside escapes",
    image: "https://images.pexels.com/photos/32796818/pexels-photo-32796818.jpeg",
    icon: "🌊",
    products: [
      "Linen Button-Down Shirt",
      "Tailored Linen Pants",
      "Canvas Espadrilles",
      "Straw Sun Hat",
    ],
  },
  {
    title: "Garden Party Ready",
    description: "Sophisticated looks for outdoor entertaining",
    image: "https://images.pexels.com/photos/17294877/pexels-photo-17294877.png",
    icon: "☀️",
    products: [
      "Silk Print Dress",
      "Light Cashmere Cardigan",
      "Leather Sandals",
      "Delicate Gold Jewelry",
    ],
  },
  {
    title: "City Summer",
    description: "Professional pieces that beat the heat",
    image: "https://images.pexels.com/photos/5717325/pexels-photo-5717325.jpeg",
    icon: "✨",
    products: [
      "Lightweight Blazer",
      "Cotton Midi Skirt",
      "Breathable Blouse",
      "Comfortable Loafers",
    ],
  },
];

const StyleThemes = ({
  title = "Three Ways to Summer",
  description = "Whether you're planning a coastal escape, hosting garden parties, or navigating city summers, we have the perfect pieces for every occasion.",
  themes = defaultThemes,
  backgroundColor = "bg-background",
  columns = "3",
}: StyleThemesProps) => {
  const gridClasses = {
    "1": "grid-cols-1",
    "2": "grid-cols-1 lg:grid-cols-2",
    "3": "grid-cols-1 lg:grid-cols-3",
    "4": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className={`py-16 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        <div className={`grid ${gridClasses[columns]} gap-8`}>
          {themes.map((theme, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={theme.image}
                    alt={theme.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                      {theme.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-2">
                    {theme.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {theme.description}
                  </p>
                  <ul className="space-y-1 mb-6">
                    {theme.products.map((product, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">
                        • {product}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    Shop This Look
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StyleThemes;
