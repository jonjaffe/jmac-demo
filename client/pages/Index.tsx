import { Truck, RotateCcw, Shield, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProductGrid, { Product } from "@/components/ProductGrid";
import CollectionsShowcase, {
  Collection,
} from "@/components/CollectionsShowcase";
import CallToActionSection, {
  ActionButton,
} from "@/components/CallToActionSection";
import FeaturesSection, { Feature } from "@/components/FeaturesSection";
import ProductShowcase, { ProductItem } from "@/components/ProductShowcase";

const Index = () => {
  const featuredProducts: Product[] = [
    {
      id: 1,
      name: "Classic Cotton Shirt",
      price: 128,
      image:
        "https://images.pexels.com/photos/6276012/pexels-photo-6276012.jpeg",
      category: "Men",
      isNew: true,
    },
    {
      id: 2,
      name: "Linen Summer Dress",
      price: 198,
      originalPrice: 248,
      image:
        "https://images.pexels.com/photos/1887465/pexels-photo-1887465.jpeg",
      category: "Women",
    },
    {
      id: 3,
      name: "Leather Weekend Bag",
      price: 425,
      image:
        "https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg",
      category: "Accessories",
      isNew: true,
    },
    {
      id: 4,
      name: "Cashmere Cardigan",
      price: 285,
      originalPrice: 325,
      image:
        "https://images.pexels.com/photos/4210854/pexels-photo-4210854.jpeg",
      category: "Women",
    },
  ];

  const collections: Collection[] = [
    {
      title: "Women's Collection",
      description: "Timeless pieces for the modern woman",
      image:
        "https://images.pexels.com/photos/5704846/pexels-photo-5704846.jpeg",
      href: "/collections/women",
    },
    {
      title: "Men's Collection",
      description: "Classic American style essentials",
      image:
        "https://images.pexels.com/photos/5264948/pexels-photo-5264948.jpeg",
      href: "/collections/men",
    },
    {
      title: "Accessories",
      description: "Perfect finishing touches",
      image:
        "https://images.pexels.com/photos/1870926/pexels-photo-1870926.jpeg",
      href: "/collections/accessories",
    },
  ];

  const features: Feature[] = [
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Free Shipping",
      description: "On orders over $150",
    },
    {
      icon: <RotateCcw className="h-6 w-6" />,
      title: "Easy Returns",
      description: "30-day return policy",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Payment",
      description: "Your data is protected",
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Premium Quality",
      description: "Finest materials and craftsmanship",
    },
  ];

  const productShowcaseItems: ProductItem[] = [
    {
      title: "The Linen",
      subtitle: "Shirt",
      image:
        "https://images.pexels.com/photos/6276012/pexels-photo-6276012.jpeg",
      href: "/collections/shirts/linen-shirt",
      alt: "White linen shirt",
    },
    {
      title: "The White",
      subtitle: "Dress",
      image:
        "https://images.pexels.com/photos/1887465/pexels-photo-1887465.jpeg",
      href: "/collections/dresses/white-dress",
      alt: "White summer dress",
    },
    {
      title: "The Wicker",
      subtitle: "Bag",
      image:
        "https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg",
      href: "/collections/accessories/wicker-bag",
      alt: "Wicker handbag",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <HeroSection
        badge="New Spring Collection"
        title="Timeless Style,"
        highlightedText="Modern Living"
        description="Discover our curated collection of classic American clothing designed for life's memorable moments."
        buttons={[
          {
            text: "Shop New Arrivals",
            href: "/collections/new-arrivals",
            variant: "default",
          },
          {
            text: "View Style Guide",
            href: "/style-guide",
            variant: "outline",
          },
        ]}
        image="https://images.pexels.com/photos/27733947/pexels-photo-27733947.jpeg"
        imageAlt="Spring Collection Hero"
      />

      <ProductGrid
        title="Featured Pieces"
        description="Handpicked favorites that embody our commitment to quality, comfort, and timeless style."
        products={featuredProducts}
        showViewAllButton={true}
        viewAllButtonHref="/collections/all"
        showCategory={true}
      />

      <CollectionsShowcase
        title="Shop Collections"
        description="Explore our carefully curated collections designed for every occasion and season."
        collections={collections}
      />

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold mb-4">
              Signature Pieces
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our most beloved designs that define the essence of timeless style
              and quality craftsmanship.
            </p>
          </div>
          <ProductShowcase
            products={productShowcaseItems}
            zoomScale={1.08}
            gap="gap-2"
          />
        </div>
      </div>

      <CallToActionSection
        badge="Style Guide"
        title="The Summer Style Guide"
        description="Discover the perfect pieces for warm weather entertaining, coastal getaways, and everything in between. Our curated selection makes summer dressing effortless and elegant."
        buttons={[
          {
            text: "Explore the Guide",
            href: "/style-guide",
            className: "btn-primary",
          },
        ]}
        image="https://images.pexels.com/photos/32796818/pexels-photo-32796818.jpeg"
        imageAlt="Summer Style Guide"
        layout="side-by-side"
        imagePosition="left"
        backgroundColor="bg-gradient-to-r from-sage-100 to-cream-100"
      />

      <FeaturesSection features={features} />

      <Footer />
    </div>
  );
};

export default Index;
