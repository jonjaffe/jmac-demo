import { Sun, Waves, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import StyleThemes, { StyleTheme } from "@/components/StyleThemes";
import ProductGrid, { Product } from "@/components/ProductGrid";
import ColorPalette, { Color } from "@/components/ColorPalette";
import CallToActionSection, {
  ActionButton,
} from "@/components/CallToActionSection";

const StyleGuide = () => {
  const styleThemes: StyleTheme[] = [
    {
      title: "Coastal Elegance",
      description: "Effortless pieces perfect for seaside escapes",
      image:
        "https://images.pexels.com/photos/32796818/pexels-photo-32796818.jpeg",
      icon: <Waves className="h-6 w-6" />,
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
      image:
        "https://images.pexels.com/photos/17294877/pexels-photo-17294877.png",
      icon: <Sun className="h-6 w-6" />,
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
      image:
        "https://images.pexels.com/photos/5717325/pexels-photo-5717325.jpeg",
      icon: <Sparkles className="h-6 w-6" />,
      products: [
        "Lightweight Blazer",
        "Cotton Midi Skirt",
        "Breathable Blouse",
        "Comfortable Loafers",
      ],
    },
  ];

  const keyPieces: Product[] = [
    {
      name: "The Perfect White Shirt",
      description: "Crisp, versatile, and endlessly chic",
      image:
        "https://images.pexels.com/photos/6276012/pexels-photo-6276012.jpeg",
      price: 128,
    },
    {
      name: "Linen Wide-Leg Pants",
      description: "Comfortable elegance for warm days",
      image:
        "https://images.pexels.com/photos/31135566/pexels-photo-31135566.jpeg",
      price: 168,
    },
    {
      name: "Silk Midi Dress",
      description: "One piece, endless possibilities",
      image:
        "https://images.pexels.com/photos/32766679/pexels-photo-32766679.jpeg",
      price: 248,
    },
    {
      name: "Lightweight Knit Cardigan",
      description: "The perfect layer for air-conditioned spaces",
      image:
        "https://images.pexels.com/photos/4210854/pexels-photo-4210854.jpeg",
      price: 185,
    },
  ];

  const colorPalette: Color[] = [
    { name: "Ocean Blue", color: "bg-blue-500", hex: "#3B82F6" },
    { name: "Sage Green", color: "bg-green-400", hex: "#4ADE80" },
    { name: "Warm Cream", color: "bg-yellow-100", hex: "#FEF3C7" },
    { name: "Coral Pink", color: "bg-pink-400", hex: "#F472B6" },
    { name: "Sand Beige", color: "bg-amber-200", hex: "#FDE68A" },
    { name: "Classic Navy", color: "bg-blue-900", hex: "#1E3A8A" },
  ];

  const ctaButtons: ActionButton[] = [
    {
      text: "Shop Women's Collection",
      href: "/collections/women",
      variant: "default",
      className: "btn-primary",
    },
    {
      text: "Shop Men's Collection",
      href: "/collections/men",
      variant: "outline",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <HeroSection
        badge="Summer 2025"
        title="The Summer"
        highlightedText="Style Guide"
        description="Discover effortless elegance for the season ahead. From coastal getaways to city adventures, find pieces that move with you through every summer moment."
        primaryButtonText="Shop the Collection"
        primaryButtonHref="/collections/all"
        secondaryButtonText="Download Guide"
        secondaryButtonHref="#download"
        image="https://images.pexels.com/photos/32796818/pexels-photo-32796818.jpeg"
        imageAlt="Summer Style Guide"
        backgroundColor="bg-gradient-to-r from-blue-50 to-green-50"
      />

      <StyleThemes
        title="Three Ways to Summer"
        description="Whether you're planning a coastal escape, hosting garden parties, or navigating city summers, we have the perfect pieces for every occasion."
        themes={styleThemes}
      />

      <ProductGrid
        title="Essential Summer Pieces"
        description="Build the foundation of your summer wardrobe with these versatile, high-quality pieces that work for any occasion."
        products={keyPieces}
        backgroundColor="bg-muted/30"
        showAddToCart={true}
        showCategory={false}
      />

      <ColorPalette
        title="Summer Color Palette"
        description="This season's colors are inspired by coastal landscapes and summer sunsets. Mix and match these hues for effortless coordination."
        colors={colorPalette}
      />

      <CallToActionSection
        title="Ready to Embrace Summer Style?"
        description="Explore our complete summer collection and create looks that will take you from sunrise to sunset in effortless style."
        buttons={ctaButtons}
        layout="centered"
      />

      <Footer />
    </div>
  );
};

export default StyleGuide;
