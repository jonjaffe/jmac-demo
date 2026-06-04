import { Truck, RotateCcw, Shield, Star, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
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
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <HeroSection
        badge="New Spring Collection"
        title="Timeless Style,"
        highlightedText="Modern Living"
        description="Discover our curated collection of classic American clothing designed for life's memorable moments."
        primaryButtonText="Shop New Arrivals"
        primaryButtonHref="/collections/new-arrivals"
        secondaryButtonText="View Style Guide"
        secondaryButtonHref="/style-guide"
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

      <div className="w-full px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-amber-50 via-background to-blue-50">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold text-primary">NEW FEATURE</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3">
                  Discover Your Style
                </h2>
                <p className="text-base text-muted-foreground mb-6">
                  Meet your personal Style Concierge. Get curated outfit recommendations tailored to your preferences, perfect for any occasion.
                </p>
                <Link to="/style-concierge">
                  <Button size="lg" className="w-full sm:w-auto">
                    Try Style Concierge
                  </Button>
                </Link>
              </div>
              <div className="hidden md:block">
                <img
                  src="https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg"
                  alt="Style Concierge"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </Card>
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
