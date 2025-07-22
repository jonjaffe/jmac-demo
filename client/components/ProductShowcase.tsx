import React from "react";
import { cn } from "@/lib/utils";

interface ProductShowcaseItem {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  alt: string;
  href?: string;
}

interface ProductShowcaseProps {
  items?: ProductShowcaseItem[];
  className?: string;
}

const defaultItems: ProductShowcaseItem[] = [
  {
    id: "linen-shirt",
    title: "The Linen",
    subtitle: "Shirt",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/4679e81e7ec467524065876aaae3dae152685276?width=950",
    alt: "The Linen Shirt",
    href: "/collections/shirts"
  },
  {
    id: "white-dress",
    title: "The White",
    subtitle: "Dress",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/647eb1248778d0f1e7ea8bcfb6ccb5ea2dfa323f?width=950",
    alt: "The White Dress",
    href: "/collections/dresses"
  },
  {
    id: "wicker-bag",
    title: "The Wicker",
    subtitle: "Bag",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/b844558521324ac08a9af04837b5172cbd506f00?width=950",
    alt: "The Wicker Bag",
    href: "/collections/bags"
  }
];

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ 
  items = defaultItems, 
  className 
}) => {
  return (
    <section className={cn("w-full bg-white", className)}>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 lg:gap-2">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "group relative overflow-hidden bg-white cursor-pointer",
                "transform transition-all duration-500 ease-in-out",
                "hover:scale-105 hover:z-10",
                "hover:shadow-2xl hover:shadow-black/20"
              )}
              onClick={() => item.href && (window.location.href = item.href)}
              style={{
                aspectRatio: "475/632"
              }}
            >
              {/* Image */}
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className={cn(
                    "w-full h-full object-cover",
                    "transform transition-transform duration-700 ease-out",
                    "group-hover:scale-110"
                  )}
                  loading="lazy"
                />
                
                {/* Gradient overlay */}
                <div 
                  className={cn(
                    "absolute inset-0",
                    "bg-gradient-to-b from-black/20 via-transparent to-black/40",
                    "opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                  )}
                />
              </div>

              {/* Text overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className={cn(
                    "text-center text-white",
                    "transform transition-all duration-300",
                    "group-hover:scale-110"
                  )}
                >
                  <h3 
                    className={cn(
                      "font-serif text-3xl md:text-4xl lg:text-5xl font-medium",
                      "tracking-wide leading-tight",
                      "drop-shadow-lg"
                    )}
                  >
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p 
                      className={cn(
                        "font-serif text-2xl md:text-3xl lg:text-4xl font-medium",
                        "tracking-wide mt-1",
                        "drop-shadow-lg"
                      )}
                    >
                      {item.subtitle}
                    </p>
                  )}
                </div>
              </div>

              {/* Hover effect border */}
              <div 
                className={cn(
                  "absolute inset-0 border-2 border-white/0",
                  "transition-all duration-300",
                  "group-hover:border-white/30"
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
