import React from "react";
import HeroSection from "../components/HeroSection";
import HeroWithChildren from "../components/HeroWithChildren";
import CallToActionSection from "../components/CallToActionSection";
import CollectionsShowcase from "../components/CollectionsShowcase";
import ColorPalette from "../components/ColorPalette";
import FeaturesSection from "../components/FeaturesSection";
import ProductGrid from "../components/ProductGrid";
import StyleThemes from "../components/StyleThemes";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { RakutenButton } from "../components/RakutenButton";

const buttonVariants = ["default", "destructive", "outline", "secondary", "ghost", "link"];
const buttonSizes = ["default", "sm", "lg", "icon"];
const badgeVariants = ["default", "secondary", "destructive", "outline"];

const KitchenSink = () => (
  <div className="flex flex-col gap-8 py-8">
    <Navigation />
    <h1 className="text-4xl font-bold mb-8 text-center">Kitchen Sink</h1>
    <Tabs defaultValue="hero" className="w-full">
      <TabsList className="mx-auto mb-8 flex flex-wrap justify-center gap-2">
        <TabsTrigger value="hero">HeroSection</TabsTrigger>
        <TabsTrigger value="cta">Call To Action</TabsTrigger>
        <TabsTrigger value="collections">Collections</TabsTrigger>
        <TabsTrigger value="palette">Color Palette</TabsTrigger>
        <TabsTrigger value="features">Features</TabsTrigger>
        <TabsTrigger value="products">Product Grid</TabsTrigger>
        <TabsTrigger value="themes">Style Themes</TabsTrigger>
        <TabsTrigger value="heroChildren">Hero With Children</TabsTrigger>
        <TabsTrigger value="ui">UI Components</TabsTrigger>
        <TabsTrigger value="rakuten">Rakuten Button</TabsTrigger>
        <TabsTrigger value="footer">Footer</TabsTrigger>
      </TabsList>
      <TabsContent value="hero">
        <h2 className="text-2xl font-semibold text-center mb-4">HeroSection Variants</h2>
        {/* HeroSection Variants */}
        <HeroSection
          badge="New Spring Collection"
          title="Timeless Style,"
          highlightedText="Modern Living"
          description="Discover our curated collection of classic American clothing designed for life's memorable moments."
          buttons={[
            { text: "Shop New Arrivals", href: "/collections/new-arrivals", variant: "default" },
            { text: "View Style Guide", href: "/style-guide", variant: "outline" }
          ]}
          image="https://images.pexels.com/photos/27733947/pexels-photo-27733947.jpeg"
          imageAlt="Spring Collection Hero"
          backgroundColor="bg-gradient-to-r from-navy-50 to-cream-50"
        />
        <HeroSection
          badge="Limited Edition"
          title="Classic Meets Modern"
          highlightedText="Shop Now"
          description="A new take on timeless style."
          buttons={[
            { text: "See Collection", href: "/collections/limited", variant: "secondary" }
          ]}
          image="https://images.pexels.com/photos/1887465/pexels-photo-1887465.jpeg"
          imageAlt="Limited Edition Hero"
          backgroundColor="bg-gradient-to-r from-cream-100 to-sage-100"
        />
      </TabsContent>
      <TabsContent value="cta">
        <h2 className="text-2xl font-semibold text-center mb-4">CallToActionSection Variants</h2>
        {/* CallToActionSection Variants */}
        <CallToActionSection
          title="The Summer Style Guide"
          description="Discover the perfect pieces for warm weather entertaining, coastal getaways, and everything in between. Our curated selection makes summer dressing effortless and elegant."
          buttons={[
            { text: "Explore the Guide", href: "/style-guide", variant: "default", className: "btn-primary" }
          ]}
          badge="Style Guide"
          image="https://images.pexels.com/photos/32796818/pexels-photo-32796818.jpeg"
          imageAlt="Summer Style Guide"
          backgroundColor="bg-gradient-to-r from-sage-100 to-cream-100"
          layout="side-by-side"
          imagePosition="left"
        />
        <CallToActionSection
          title="Join Our Community"
          description="Sign up for exclusive offers and updates."
          buttons={[
            { text: "Sign Up", href: "/signup", variant: "outline", className: "btn-primary" }
          ]}
          badge="Newsletter"
          image="https://images.pexels.com/photos/32796818/pexels-photo-32796818.jpeg"
          imageAlt="Newsletter"
          backgroundColor="bg-muted/30"
          layout="centered"
          imagePosition="left"
        />
        <CallToActionSection
          title="Limited Time Offer"
          description="Save big on our best sellers."
          buttons={[
            { text: "Shop Sale", href: "/sale", variant: "ghost", className: "btn-primary" }
          ]}
          badge="Sale"
          image="https://images.pexels.com/photos/32796818/pexels-photo-32796818.jpeg"
          imageAlt="Sale"
          backgroundColor="bg-gradient-to-r from-blue-50 to-green-50"
          layout="side-by-side"
          imagePosition="right"
        />
      </TabsContent>
      <TabsContent value="collections">
        <h2 className="text-2xl font-semibold text-center mb-4">CollectionsShowcase Variants</h2>
        {/* CollectionsShowcase Variants */}
        <CollectionsShowcase
          title="Shop Collections"
          description="Explore our carefully curated collections designed for every occasion and season."
          collections={[
            {
              title: "Women's Collection",
              description: "Timeless pieces for the modern woman",
              image: "https://images.pexels.com/photos/5704846/pexels-photo-5704846.jpeg",
              href: "/collections/women"
            },
            {
              title: "Men's Collection",
              description: "Classic American style essentials",
              image: "https://images.pexels.com/photos/5264948/pexels-photo-5264948.jpeg",
              href: "/collections/men"
            },
            {
              title: "Accessories",
              description: "Perfect finishing touches",
              image: "https://images.pexels.com/photos/1870926/pexels-photo-1870926.jpeg",
              href: "/collections/accessories"
            }
          ]}
          backgroundColor="bg-muted/30"
          columns="2"
        />
        <CollectionsShowcase
          title="Shop More Collections"
          description="Discover even more curated collections."
          collections={[
            {
              title: "Resort Wear",
              description: "Relaxed styles for your next getaway",
              image: "https://images.pexels.com/photos/1887465/pexels-photo-1887465.jpeg",
              href: "/collections/resort"
            },
            {
              title: "Workwear",
              description: "Polished pieces for the office",
              image: "https://images.pexels.com/photos/4210854/pexels-photo-4210854.jpeg",
              href: "/collections/workwear"
            },
            {
              title: "Loungewear",
              description: "Comfort meets style",
              image: "https://images.pexels.com/photos/5717325/pexels-photo-5717325.jpeg",
              href: "/collections/loungewear"
            },
            {
              title: "Accessories",
              description: "Perfect finishing touches",
              image: "https://images.pexels.com/photos/1870926/pexels-photo-1870926.jpeg",
              href: "/collections/accessories"
            }
          ]}
          backgroundColor="bg-background"
          columns="4"
        />
      </TabsContent>
      <TabsContent value="palette">
        <h2 className="text-2xl font-semibold text-center mb-4">ColorPalette Variants</h2>
        {/* ColorPalette Variants */}
        <ColorPalette
          title="Muted Palette"
          description="Soft, subtle colors for a calming effect."
          colors={[
            { name: "Muted Blue", color: "bg-blue-200", hex: "#BFDBFE" },
            { name: "Muted Green", color: "bg-green-200", hex: "#BBF7D0" },
            { name: "Muted Yellow", color: "bg-yellow-100", hex: "#FEF9C3" },
          ]}
          columns="3"
        />
        <ColorPalette
          title="Vibrant Palette"
          description="Bright, bold colors for summer."
          colors={[
            { name: "Vivid Red", color: "bg-red-500", hex: "#EF4444" },
            { name: "Vivid Blue", color: "bg-blue-500", hex: "#3B82F6" },
            { name: "Vivid Green", color: "bg-green-500", hex: "#22C55E" },
            { name: "Vivid Yellow", color: "bg-yellow-400", hex: "#FACC15" },
            { name: "Vivid Pink", color: "bg-pink-500", hex: "#EC4899" },
            { name: "Vivid Purple", color: "bg-purple-500", hex: "#A21CAF" },
          ]}
          backgroundColor="bg-muted/30"
          columns="6"
        />
      </TabsContent>
      <TabsContent value="features">
        <h2 className="text-2xl font-semibold text-center mb-4">FeaturesSection Variants</h2>
        {/* FeaturesSection Variants */}
        <FeaturesSection
          features={[
            { icon: "🚚", title: "Free Shipping", description: "On orders over $150" },
            { icon: "🔄", title: "Easy Returns", description: "30-day return policy" },
          ]}
          columns="2"
        />
        <FeaturesSection
          features={[
            { icon: "🛡️", title: "Secure Payment", description: "Your data is protected" },
            { icon: "⭐", title: "Premium Quality", description: "Finest materials and craftsmanship" },
            { icon: "🌱", title: "Sustainable", description: "Eco-friendly materials" },
            { icon: "🎁", title: "Gift Wrapping", description: "Available on all orders" },
          ]}
          backgroundColor="bg-muted/30"
          columns="4"
        />
      </TabsContent>
      <TabsContent value="products">
        <h2 className="text-2xl font-semibold text-center mb-4">ProductGrid Variants</h2>
        {/* ProductGrid Variants */}
        <ProductGrid
          products={[
            { id: 1, name: "Classic Cotton Shirt", price: 128, image: "https://images.pexels.com/photos/6276012/pexels-photo-6276012.jpeg", category: "Men", isNew: true },
            { id: 2, name: "Linen Summer Dress", price: 198, originalPrice: 248, image: "https://images.pexels.com/photos/1887465/pexels-photo-1887465.jpeg", category: "Women" },
          ]}
          columns="2"
        />
        <ProductGrid
          products={[
            { id: 1, name: "Classic Cotton Shirt", price: 128, image: "https://images.pexels.com/photos/6276012/pexels-photo-6276012.jpeg", category: "Men", isNew: true },
            { id: 2, name: "Linen Summer Dress", price: 198, originalPrice: 248, image: "https://images.pexels.com/photos/1887465/pexels-photo-1887465.jpeg", category: "Women" },
            { id: 3, name: "Leather Weekend Bag", price: 425, image: "https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg", category: "Accessories", isNew: true },
            { id: 4, name: "Cashmere Cardigan", price: 285, originalPrice: 325, image: "https://images.pexels.com/photos/4210854/pexels-photo-4210854.jpeg", category: "Women" },
          ]}
          columns="4"
          viewMode="list"
          showAddToCart
          showCategory
          showColors
          backgroundColor="bg-muted/30"
        />
      </TabsContent>
      <TabsContent value="themes">
        <h2 className="text-2xl font-semibold text-center mb-4">StyleThemes Variants</h2>
        {/* StyleThemes Variants */}
        <StyleThemes
          title="Three Ways to Summer"
          description="Whether you're planning a coastal escape, hosting garden parties, or navigating city summers, we have the perfect pieces for every occasion."
          themes={[
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
          ]}
          columns="1"
        />
        <StyleThemes
          title="Seasonal Themes"
          description="Explore our seasonal style inspirations."
          themes={[
            {
              title: "Winter Warmth",
              description: "Cozy up in style",
              image: "https://images.pexels.com/photos/4210854/pexels-photo-4210854.jpeg",
              icon: "❄️",
              products: [
                "Wool Coat",
                "Cashmere Scarf",
                "Leather Boots",
                "Knit Beanie",
              ],
            },
            {
              title: "Spring Fresh",
              description: "Light layers for the new season",
              image: "https://images.pexels.com/photos/1887465/pexels-photo-1887465.jpeg",
              icon: "🌸",
              products: [
                "Trench Coat",
                "Floral Dress",
                "Pastel Cardigan",
                "Canvas Sneakers",
              ],
            },
            {
              title: "Autumn Adventure",
              description: "Earthy tones and rugged textures",
              image: "https://images.pexels.com/photos/5717325/pexels-photo-5717325.jpeg",
              icon: "🍂",
              products: [
                "Corduroy Jacket",
                "Plaid Shirt",
                "Denim Jeans",
                "Suede Boots",
              ],
            },
          ]}
          columns="3"
          backgroundColor="bg-muted/30"
        />
      </TabsContent>
      <TabsContent value="heroChildren">
        <h2 className="text-2xl font-semibold text-center mb-4">HeroWithChildren</h2>
        <HeroWithChildren
          image="https://images.pexels.com/photos/27733947/pexels-photo-27733947.jpeg"
          imageAlt="Spring Collection Hero"
          backgroundColor="bg-gradient-to-r from-navy-50 to-cream-50"
        />
      </TabsContent>
      <TabsContent value="ui">
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-2xl font-semibold">Button Variants</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {buttonVariants.map((variant) => (
              <Button key={variant} variant={variant as any}>
                {variant.charAt(0).toUpperCase() + variant.slice(1)}
              </Button>
            ))}
          </div>
          <h2 className="text-2xl font-semibold">Button Sizes</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {buttonSizes.map((size) => (
              <Button key={size} size={size as any}>
                {size.charAt(0).toUpperCase() + size.slice(1)}
              </Button>
            ))}
          </div>
          <h2 className="text-2xl font-semibold">Badge Variants</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {badgeVariants.map((variant) => (
              <Badge key={variant} variant={variant as any}>
                {variant.charAt(0).toUpperCase() + variant.slice(1)}
              </Badge>
            ))}
          </div>
          <h2 className="text-2xl font-semibold">Card Example</h2>
          <Card className="max-w-xs">
            <CardContent>Card Content</CardContent>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="rakuten">
        <div className="flex flex-col gap-12 p-8">
          <h2 className="text-3xl font-semibold text-center mb-4">Rakuten Button Component</h2>

          {/* Primary Variants */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold">Primary Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <RakutenButton type="primary-red">Primary Red</RakutenButton>
              <RakutenButton type="primary-black">Primary Black</RakutenButton>
              <RakutenButton type="primary-white">Primary White</RakutenButton>
              <RakutenButton type="primary-red" disabled>Disabled</RakutenButton>
              <RakutenButton type="primary-red" loading>Loading</RakutenButton>
            </div>
          </section>

          {/* Secondary Contained */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold">Secondary Contained</h3>
            <div className="flex flex-wrap gap-4">
              <RakutenButton type="secondary-contained">Enabled</RakutenButton>
              <RakutenButton type="secondary-contained" disabled>Disabled</RakutenButton>
              <RakutenButton type="secondary-contained" loading>Loading</RakutenButton>
            </div>
          </section>

          {/* Tertiary Text */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold">Tertiary Text</h3>
            <div className="flex flex-wrap gap-4">
              <RakutenButton type="tertiary-text">Enabled</RakutenButton>
              <RakutenButton type="tertiary-underlined-text">Underlined</RakutenButton>
              <RakutenButton type="tertiary-text" disabled>Disabled</RakutenButton>
            </div>
          </section>

          {/* Tertiary Text Subtle */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold">Tertiary Text Subtle</h3>
            <div className="flex flex-wrap gap-4">
              <RakutenButton type="tertiary-text-subtle">Enabled</RakutenButton>
              <RakutenButton type="tertiary-underlined-text-subtle">Underlined</RakutenButton>
              <RakutenButton type="tertiary-text-subtle" disabled>Disabled</RakutenButton>
            </div>
          </section>

          {/* With Icons - Left */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold">Buttons with Left Icon</h3>
            <div className="flex flex-wrap gap-4">
              <RakutenButton
                type="primary-red"
                leftIcon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.2222 4H5.77778C4.8 4 4 4.8 4 5.77778V18.2222C4 19.2 4.8 20 5.77778 20H18.2222C19.2 20 20 19.2 20 18.2222V5.77778C20 4.8 19.2 4 18.2222 4Z" fill="white"/>
                </svg>}
              >
                With Icon
              </RakutenButton>
              <RakutenButton
                type="secondary-contained"
                leftIcon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.2222 4H5.77778C4.8 4 4 4.8 4 5.77778V18.2222C4 19.2 4.8 20 5.77778 20H18.2222C19.2 20 20 19.2 20 18.2222V5.77778C20 4.8 19.2 4 18.2222 4Z" fill="black"/>
                </svg>}
              >
                With Icon
              </RakutenButton>
              <RakutenButton
                type="tertiary-text-subtle"
                leftIcon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.2222 4H5.77778C4.8 4 4 4.8 4 5.77778V18.2222C4 19.2 4.8 20 5.77778 20H18.2222C19.2 20 20 19.2 20 18.2222V5.77778C20 4.8 19.2 4 18.2222 4Z" fill="currentColor"/>
                </svg>}
              >
                With Icon
              </RakutenButton>
              <RakutenButton
                type="primary-red"
                leftIcon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.2222 4H5.77778C4.8 4 4 4.8 4 5.77778V18.2222C4 19.2 4.8 20 5.77778 20H18.2222C19.2 20 20 19.2 20 18.2222V5.77778C20 4.8 19.2 4 18.2222 4Z" fill="white"/>
                </svg>}
                loading
              >
                Loading
              </RakutenButton>
            </div>
          </section>

          {/* With Chevron - Right */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold">Buttons with Chevron (Right)</h3>
            <div className="flex flex-wrap gap-4">
              <RakutenButton type="primary-red" rightIcon>
                With Chevron
              </RakutenButton>
              <RakutenButton type="tertiary-text-subtle" rightIcon>
                With Chevron
              </RakutenButton>
              <RakutenButton type="tertiary-underlined-text-subtle" rightIcon>
                With Chevron
              </RakutenButton>
            </div>
          </section>

          {/* Icon Only */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold">Icon Only Buttons</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <RakutenButton
                type="primary-red"
                iconOnly={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5556 1H3.44444C2.1 1 1 2.1 1 3.44444V20.5556C1 21.9 2.1 23 3.44444 23H20.5556C21.9 23 23 21.9 23 20.5556V3.44444C23 2.1 21.9 1 20.5556 1Z" fill="white"/>
                </svg>}
                aria-label="Icon button"
              />
              <RakutenButton
                type="primary-black"
                iconOnly={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5556 1H3.44444C2.1 1 1 2.1 1 3.44444V20.5556C1 21.9 2.1 23 3.44444 23H20.5556C21.9 23 23 21.9 23 20.5556V3.44444C23 2.1 21.9 1 20.5556 1Z" fill="white"/>
                </svg>}
                aria-label="Icon button"
              />
              <RakutenButton
                type="primary-white"
                iconOnly={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5556 1H3.44444C2.1 1 1 2.1 1 3.44444V20.5556C1 21.9 2.1 23 3.44444 23H20.5556C21.9 23 23 21.9 23 20.5556V3.44444C23 2.1 21.9 1 20.5556 1Z" fill="black"/>
                </svg>}
                aria-label="Icon button"
              />
              <RakutenButton
                type="tertiary-text-subtle"
                iconOnly={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.2222 4H5.77778C4.8 4 4 4.8 4 5.77778V18.2222C4 19.2 4.8 20 5.77778 20H18.2222C19.2 20 20 19.2 20 18.2222V5.77778C20 4.8 19.2 4 18.2222 4Z" fill="currentColor"/>
                </svg>}
                aria-label="Icon button"
              />
              <RakutenButton
                type="primary-red"
                iconOnly={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5556 1H3.44444C2.1 1 1 2.1 1 3.44444V20.5556C1 21.9 2.1 23 3.44444 23H20.5556C21.9 23 23 21.9 23 20.5556V3.44444C23 2.1 21.9 1 20.5556 1Z" fill="white"/>
                </svg>}
                disabled
                aria-label="Icon button disabled"
              />
            </div>
          </section>

          {/* Sizes */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold">Button Sizes</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <RakutenButton type="primary-red" size="regular">Regular Size</RakutenButton>
              <RakutenButton type="primary-red" size="small">Small Size</RakutenButton>
              <RakutenButton
                type="primary-red"
                size="regular"
                leftIcon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.2222 4H5.77778C4.8 4 4 4.8 4 5.77778V18.2222C4 19.2 4.8 20 5.77778 20H18.2222C19.2 20 20 19.2 20 18.2222V5.77778C20 4.8 19.2 4 18.2222 4Z" fill="white"/>
                </svg>}
              >
                Regular with Icon
              </RakutenButton>
              <RakutenButton
                type="primary-red"
                size="small"
                leftIcon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.2222 4H5.77778C4.8 4 4 4.8 4 5.77778V18.2222C4 19.2 4.8 20 5.77778 20H18.2222C19.2 20 20 19.2 20 18.2222V5.77778C20 4.8 19.2 4 18.2222 4Z" fill="white"/>
                </svg>}
              >
                Small with Icon
              </RakutenButton>
            </div>
          </section>

          {/* Dark Mode Section */}
          <section className="space-y-4 bg-black p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-white">Dark Mode Variants</h3>
            <div className="flex flex-wrap gap-4">
              <RakutenButton type="primary-white" darkMode={true}>Primary White</RakutenButton>
              <RakutenButton type="secondary-contained" darkMode={true}>Secondary</RakutenButton>
              <RakutenButton type="tertiary-text-subtle" darkMode={true}>Tertiary Subtle</RakutenButton>
              <RakutenButton type="tertiary-underlined-text-subtle" darkMode={true}>Underlined</RakutenButton>
              <RakutenButton
                type="primary-white"
                darkMode={true}
                leftIcon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.2222 4H5.77778C4.8 4 4 4.8 4 5.77778V18.2222C4 19.2 4.8 20 5.77778 20H18.2222C19.2 20 20 19.2 20 18.2222V5.77778C20 4.8 19.2 4 18.2222 4Z" fill="black"/>
                </svg>}
              >
                With Icon
              </RakutenButton>
            </div>
          </section>

          {/* Usage Example */}
          <section className="space-y-4 bg-muted/30 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold">Component Props</h3>
            <div className="space-y-2 text-sm font-mono">
              <p><strong>type:</strong> "primary-red" | "primary-black" | "primary-white" | "secondary-contained" | "tertiary-text" | "tertiary-text-subtle" | "tertiary-underlined-text" | "tertiary-underlined-text-subtle"</p>
              <p><strong>size:</strong> "regular" | "small"</p>
              <p><strong>iconPosition:</strong> "none" | "left" | "right" | "only"</p>
              <p><strong>darkMode:</strong> boolean</p>
              <p><strong>loading:</strong> boolean</p>
              <p><strong>disabled:</strong> boolean</p>
              <p><strong>leftIcon:</strong> ReactNode</p>
              <p><strong>rightIcon:</strong> boolean (shows chevron)</p>
              <p><strong>iconOnly:</strong> ReactNode</p>
            </div>
          </section>
        </div>
      </TabsContent>
      <TabsContent value="footer">
        <Footer showStayInTouch={true} />
      </TabsContent>
    </Tabs>
  </div>
);

export default KitchenSink;
