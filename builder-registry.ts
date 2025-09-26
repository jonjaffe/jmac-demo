import { Builder, withChildren } from "@builder.io/react";
import CallToActionSection from "./client/components/CallToActionSection";
import CollectionsShowcase from "./client/components/CollectionsShowcase";
import ColorPalette from "./client/components/ColorPalette";
import FeaturesSection from "./client/components/FeaturesSection";
import Footer from "./client/components/Footer";
import HeroSection from "./client/components/HeroSection";
import Navigation from "./client/components/Navigation";
import ProductGrid from "./client/components/ProductGrid";
import StyleThemes from "./client/components/StyleThemes";
import { Button } from "./client/components/ui/button";
import { Badge } from "./client/components/ui/badge";
import { Card, CardContent } from "./client/components/ui/card";
import { Separator } from "./client/components/ui/separator";
import HeroWithChildren from "./client/components/HeroWithChildren";

Builder.registerComponent(Button, {
  name: "Button",
  image: "https://cdn.jsdelivr.net/npm/@tabler/icons/icons/click.svg",
  inputs: [
    { name: "children", type: "string", defaultValue: "Shop New Arrivals" },
    { name: "variant", type: "string", enum: ["default", "destructive", "outline", "secondary", "ghost", "link"], defaultValue: "default" },
    { name: "size", type: "string", enum: ["default", "sm", "lg", "icon"], defaultValue: "lg" },
    { name: "className", type: "string" },
    { name: "type", type: "string", enum: ["button", "submit", "reset"], defaultValue: "button" },
  ],
});

Builder.registerComponent(Badge, {
  name: "Badge",
  image: "https://cdn.jsdelivr.net/npm/@tabler/icons/icons/badge.svg",
  inputs: [
    { name: "children", type: "string", defaultValue: "Style Guide" },
    { name: "variant", type: "string", enum: ["default", "secondary", "destructive", "outline"], defaultValue: "outline" },
    { name: "className", type: "string", defaultValue: "w-fit mb-4 mx-auto" },
  ],
});

Builder.registerComponent(CallToActionSection, {
  name: "CallToActionSection",
  image: "https://cdn.jsdelivr.net/npm/@tabler/icons/icons/volume.svg",
  inputs: [
    { name: "title", type: "string", defaultValue: "The Summer Style Guide" },
    { name: "description", type: "string", defaultValue: "Discover the perfect pieces for warm weather entertaining, coastal getaways, and everything in between. Our curated selection makes summer dressing effortless and elegant." },
    { name: "buttons", type: "list",
      defaultValue: [
        { text: "Explore the Guide", href: "/style-guide", variant: "default", className: "btn-primary" }
      ],
      subFields: [
        { name: "text", type: "string" },
        { name: "href", type: "string" },
        { name: "variant", type: "string", enum: ["default", "outline", "ghost"], defaultValue: "default" },
        { name: "className", type: "string", defaultValue: "btn-primary" },
      ] },
    { name: "badge", type: "string", required: false, defaultValue: "Style Guide" },
    { name: "image", type: "string", required: false, defaultValue: "https://images.pexels.com/photos/32796818/pexels-photo-32796818.jpeg" },
    { name: "imageAlt", type: "string", required: false, defaultValue: "Summer Style Guide" },
    { name: "backgroundColor", type: "string", required: false, defaultValue: "bg-gradient-to-r from-sage-100 to-cream-100" },
    { name: "layout", type: "string", enum: ["centered", "side-by-side"], required: false, defaultValue: "side-by-side" },
    { name: "imagePosition", type: "string", enum: ["left", "right"], required: false, defaultValue: "left" },
  ],
});

Builder.registerComponent(CollectionsShowcase, {
  name: "CollectionsShowcase",
  image: "https://cdn.jsdelivr.net/npm/@tabler/icons/icons/layout-grid.svg",
  inputs: [
    { name: "title", type: "string", defaultValue: "Shop Collections" },
    { name: "description", type: "string", defaultValue: "Explore our carefully curated collections designed for every occasion and season." },
    { name: "collections", type: "list",
      defaultValue: [
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
      ],
      subFields: [
        { name: "title", type: "string" },
        { name: "description", type: "string" },
        { name: "image", type: "string" },
        { name: "href", type: "string" },
      ] },
    { name: "backgroundColor", type: "string", required: false, defaultValue: "bg-muted/30" },
    { name: "columns", type: "string", enum: ["1", "2", "3", "4"], required: false, defaultValue: "3" },
  ],
});

Builder.registerComponent(ColorPalette, {
  name: "ColorPalette",
  image: "https://cdn.jsdelivr.net/npm/@tabler/icons/icons/palette.svg",
  inputs: [
    { name: "title", type: "string", defaultValue: "Summer Color Palette" },
    { name: "description", type: "string", defaultValue: "This season's colors are inspired by coastal landscapes and summer sunsets. Mix and match these hues for effortless coordination." },
    { name: "colors", type: "list",
      defaultValue: [
        { name: "Ocean Blue", color: "bg-blue-500", hex: "#3B82F6" },
        { name: "Sage Green", color: "bg-green-400", hex: "#4ADE80" },
        { name: "Warm Cream", color: "bg-yellow-100", hex: "#FEF3C7" },
        { name: "Coral Pink", color: "bg-pink-400", hex: "#F472B6" },
        { name: "Sand Beige", color: "bg-amber-200", hex: "#FDE68A" },
        { name: "Classic Navy", color: "bg-blue-900", hex: "#1E3A8A" },
      ],
      subFields: [
        { name: "name", type: "string" },
        { name: "color", type: "string" },
        { name: "hex", type: "color" },
      ] },
    { name: "backgroundColor", type: "string", required: false, defaultValue: "bg-background" },
    { name: "columns", type: "string", enum: ["2", "3", "4", "5", "6"], required: false, defaultValue: "6" },
  ],
});

Builder.registerComponent(FeaturesSection, {
  name: "FeaturesSection",
  image: "https://cdn.jsdelivr.net/npm/@tabler/icons/icons/settings.svg",
  inputs: [
    { name: "features", type: "list",
      defaultValue: [
        { icon: "🚚", title: "Free Shipping", description: "On orders over $150" },
        { icon: "🔄", title: "Easy Returns", description: "30-day return policy" },
        { icon: "🛡️", title: "Secure Payment", description: "Your data is protected" },
        { icon: "⭐", title: "Premium Quality", description: "Finest materials and craftsmanship" },
      ],
      subFields: [
        { name: "icon", type: "string" },
        { name: "title", type: "string" },
        { name: "description", type: "string" },
      ] },
    { name: "backgroundColor", type: "string", required: false, defaultValue: "bg-background" },
    { name: "columns", type: "string", enum: ["2", "3", "4"], required: false, defaultValue: "4" },
  ],
});

Builder.registerComponent(Footer, {
  name: "Footer",
  image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgMTlIMjFWMjFIM1YxOVoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPgo8cGF0aCBkPSJNMyAxM0gyMVYxNUgzVjEzWiIgZmlsbD0iY3VycmVudENvbG9yIi8+CjxwYXRoIGQ9Ik0zIDdIMjFWOEgzVjdaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPC9zdmc+",
  inputs: [
    { name: "showStayInTouch", type: "boolean", defaultValue: true },
  ],
});

Builder.registerComponent(HeroSection, {
  name: "HeroSection",
  image: "https://cdn.jsdelivr.net/npm/@tabler/icons/icons/photo.svg",
  inputs: [
    { name: "badge", type: "string", required: false, defaultValue: "New Spring Collection" },
    { name: "title", type: "string", defaultValue: "Timeless Style," },
    { name: "highlightedText", type: "string", required: false, defaultValue: "Modern Living" },
    { name: "description", type: "string", defaultValue: "Discover our curated collection of classic American clothing designed for life's memorable moments." },
    { name: "buttons", type: "list",
      defaultValue: [
        { text: "Shop New Arrivals", href: "/collections/new-arrivals", variant: "default" },
        { text: "View Style Guide", href: "/style-guide", variant: "outline" }
      ],
      subFields: [
        { name: "text", type: "string" },
        { name: "href", type: "string" },
        { name: "variant", type: "string", enum: ["default", "outline", "destructive", "secondary", "ghost", "link"], defaultValue: "default" },
      ] },
    { name: "image", type: "string", defaultValue: "https://images.pexels.com/photos/27733947/pexels-photo-27733947.jpeg" },
    { name: "imageAlt", type: "string", defaultValue: "Spring Collection Hero" },
    { name: "backgroundColor", type: "string", required: false },
  ],
});

Builder.registerComponent(Navigation, {
  name: "Navigation",
  image: "https://cdn.jsdelivr.net/npm/@tabler/icons/icons/menu-2.svg",
  inputs: [],
});

Builder.registerComponent(ProductGrid, {
  name: "ProductGrid",
  image: "https://cdn.jsdelivr.net/npm/@tabler/icons/icons/grid-dots.svg",
  inputs: [
    { name: "title", type: "string", required: false, defaultValue: "Featured Pieces" },
    { name: "description", type: "string", required: false, defaultValue: "Handpicked favorites that embody our commitment to quality, comfort, and timeless style." },
    { name: "products", type: "list",
      defaultValue: [
        { id: 1, name: "Classic Cotton Shirt", price: 128, image: "https://images.pexels.com/photos/6276012/pexels-photo-6276012.jpeg", category: "Men", isNew: true },
        { id: 2, name: "Linen Summer Dress", price: 198, originalPrice: 248, image: "https://images.pexels.com/photos/1887465/pexels-photo-1887465.jpeg", category: "Women" },
        { id: 3, name: "Leather Weekend Bag", price: 425, image: "https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg", category: "Accessories", isNew: true },
        { id: 4, name: "Cashmere Cardigan", price: 285, originalPrice: 325, image: "https://images.pexels.com/photos/4210854/pexels-photo-4210854.jpeg", category: "Women" },
      ],
      subFields: [
        { name: "id", type: "number", required: false },
        { name: "name", type: "string" },
        { name: "price", type: "number" },
        { name: "originalPrice", type: "number", required: false },
        { name: "image", type: "string" },
        { name: "category", type: "string", required: false },
        { name: "description", type: "string", required: false },
        { name: "isNew", type: "boolean", required: false },
        { name: "isSale", type: "boolean", required: false },
      ] },
    { name: "backgroundColor", type: "string", required: false, defaultValue: "bg-background" },
    { name: "columns", type: "string", enum: ["2", "3", "4"], required: false, defaultValue: "4" },
    { name: "viewMode", type: "string", enum: ["grid", "list"], required: false, defaultValue: "grid" },
    { name: "showViewAllButton", type: "boolean", required: false, defaultValue: true },
    { name: "viewAllButtonText", type: "string", required: false },
    { name: "viewAllButtonHref", type: "string", required: false, defaultValue: "/collections/all" },
    { name: "showAddToCart", type: "boolean", required: false, defaultValue: false },
    { name: "showCategory", type: "boolean", required: false, defaultValue: true },
    { name: "showColors", type: "boolean", required: false, defaultValue: false },
  ],
});

Builder.registerComponent(StyleThemes, {
  name: "StyleThemes",
  image: "https://cdn.jsdelivr.net/npm/@tabler/icons/icons/shirt.svg",
  inputs: [
    { name: "title", type: "string", defaultValue: "Three Ways to Summer" },
    { name: "description", type: "string", defaultValue: "Whether you're planning a coastal escape, hosting garden parties, or navigating city summers, we have the perfect pieces for every occasion." },
    { name: "themes", type: "list",
      defaultValue: [
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
      ],
      subFields: [
        { name: "title", type: "string" },
        { name: "description", type: "string" },
        { name: "image", type: "string" },
        { name: "icon", type: "string" },
        { name: "products", type: "list" },
      ] },
    { name: "backgroundColor", type: "string", required: false, defaultValue: "bg-background" },
    { name: "columns", type: "string", enum: ["1", "2", "3", "4"], required: false, defaultValue: "3" },
  ],
});

Builder.registerComponent(withChildren(HeroWithChildren), {
  name: "HeroWithChildren",
  image: "https://cdn.jsdelivr.net/npm/@tabler/icons/icons/photo.svg",
  inputs: [
    { name: "image", type: "string", defaultValue: "https://images.pexels.com/photos/27733947/pexels-photo-27733947.jpeg" },
    { name: "imageAlt", type: "string", defaultValue: "Spring Collection Hero" },
    { name: "backgroundColor", type: "string", required: false, defaultValue: "bg-gradient-to-r from-navy-50 to-cream-50" },
  ],
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: {
        name: 'Badge',
        options: {
          children: 'New Spring Collection',
          variant: 'secondary',
          className: 'w-fit',
        },
      },
    },
    {
      '@type': '@builder.io/sdk:Element',
      component: {
        name: 'h1',
        options: {
          className: 'text-4xl lg:text-6xl font-serif font-bold leading-tight',
        },
      },
      children: [
        { '@type': '@builder.io/sdk:Element', component: { name: 'Text', options: { text: 'Timeless Style, ' } } },
        {
          '@type': '@builder.io/sdk:Element',
          component: {
            name: 'span',
            options: { className: 'text-primary' },
          },
          children: [
            { '@type': '@builder.io/sdk:Element', component: { name: 'Text', options: { text: 'Modern Living' } } }
          ]
        }
      ]
    },
    {
      '@type': '@builder.io/sdk:Element',
      component: {
        name: 'p',
        options: {
          className: 'text-lg text-muted-foreground max-w-md',
        },
      },
      children: [
        { '@type': '@builder.io/sdk:Element', component: { name: 'Text', options: { text: "Discover our curated collection of classic American clothing designed for life's memorable moments." } } }
      ]
    },
    {
      '@type': '@builder.io/sdk:Element',
      component: {
        name: 'div',
        options: { className: 'flex flex-row gap-4' },
      },
      children: [
        {
          '@type': '@builder.io/sdk:Element',
          component: {
            name: 'Button',
            options: {
              children: 'Shop New Arrivals',
              variant: 'default',
              size: 'lg',
              className: 'btn-primary',
            },
          },
        },
        {
          '@type': '@builder.io/sdk:Element',
          component: {
            name: 'Button',
            options: {
              children: 'View Style Guide',
              variant: 'outline',
              size: 'lg',
            },
          },
        }
      ]
    }
  ]
});


Builder.register("editor.settings", {
  designTokens: {
    colors: [
      { name: "Navy 50", value: "#f0f4f8" },
      { name: "Navy 100", value: "#d9e2ec" },
      { name: "Navy 200", value: "#bcccdc" },
      { name: "Navy 300", value: "#9fb3c8" },
      { name: "Navy 400", value: "#829ab1" },
      { name: "Navy 500", value: "#627d98" },
      { name: "Navy 600", value: "#486581" },
      { name: "Navy 700", value: "#334e68" },
      { name: "Navy 800", value: "#243b53" },
      { name: "Navy 900", value: "#102a43" },
      { name: "Cream 50", value: "#fefcf8" },
      { name: "Cream 100", value: "#fdf8f0" },
      { name: "Cream 200", value: "#fbf1e1" },
      { name: "Cream 300", value: "#f8e8d1" },
      { name: "Cream 400", value: "#f4dfc2" },
      { name: "Cream 500", value: "#f0d6b3" },
      { name: "Cream 600", value: "#e8c79f" },
      { name: "Cream 700", value: "#deb48b" },
      { name: "Cream 800", value: "#d4a176" },
      { name: "Cream 900", value: "#c88e62" },
      { name: "Sage 50", value: "#f7f9f7" },
      { name: "Sage 100", value: "#eef2ef" },
      { name: "Sage 200", value: "#dde6df" },
      { name: "Sage 300", value: "#cbd9ce" },
      { name: "Sage 400", value: "#b9ccbd" },
      { name: "Sage 500", value: "#a7bfac" },
      { name: "Sage 600", value: "#8ba896" },
      { name: "Sage 700", value: "#6f9180" },
      { name: "Sage 800", value: "#537a6a" },
      { name: "Sage 900", value: "#376354" },
      { name: "Primary", value: "hsl(var(--primary))" },
      { name: "Primary Foreground", value: "hsl(var(--primary-foreground))" },
      { name: "Secondary", value: "hsl(var(--secondary))" },
      { name: "Secondary Foreground", value: "hsl(var(--secondary-foreground))" },
      { name: "Accent", value: "hsl(var(--accent))" },
      { name: "Accent Foreground", value: "hsl(var(--accent-foreground))" },
      { name: "Muted", value: "hsl(var(--muted))" },
      { name: "Muted Foreground", value: "hsl(var(--muted-foreground))" },
      { name: "Destructive", value: "hsl(var(--destructive))" },
      { name: "Destructive Foreground", value: "hsl(var(--destructive-foreground))" },
      { name: "Background", value: "hsl(var(--background))" },
      { name: "Foreground", value: "hsl(var(--foreground))" },
      { name: "Card", value: "hsl(var(--card))" },
      { name: "Card Foreground", value: "hsl(var(--card-foreground))" },
      { name: "Popover", value: "hsl(var(--popover))" },
      { name: "Popover Foreground", value: "hsl(var(--popover-foreground))" },
      { name: "Border", value: "hsl(var(--border))" },
      { name: "Input", value: "hsl(var(--input))" },
      { name: "Ring", value: "hsl(var(--ring))" },
    ],
    fonts: [
      { name: "Inter", value: "'Inter', system-ui, sans-serif" },
      { name: "Playfair Display", value: "'Playfair Display', Georgia, serif" },
    ],
  }
});

