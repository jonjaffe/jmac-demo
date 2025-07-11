import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface Product {
  id?: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category?: string;
  description?: string;
  colors?: string[];
  sizes?: string[];
  isNew?: boolean;
  isSale?: boolean;
}

interface ProductGridProps {
  title?: string;
  description?: string;
  products: Product[];
  backgroundColor?: string;
  columns?: "2" | "3" | "4";
  viewMode?: "grid" | "list";
  showViewAllButton?: boolean;
  viewAllButtonText?: string;
  viewAllButtonHref?: string;
  showAddToCart?: boolean;
  showCategory?: boolean;
  showColors?: boolean;
}

const defaultProducts = [
  {
    id: 1,
    name: "Classic Cotton Shirt",
    price: 128,
    image: "https://images.pexels.com/photos/6276012/pexels-photo-6276012.jpeg",
    category: "Men",
    isNew: true,
  },
  {
    id: 2,
    name: "Linen Summer Dress",
    price: 198,
    originalPrice: 248,
    image: "https://images.pexels.com/photos/1887465/pexels-photo-1887465.jpeg",
    category: "Women",
  },
  {
    id: 3,
    name: "Leather Weekend Bag",
    price: 425,
    image: "https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg",
    category: "Accessories",
    isNew: true,
  },
  {
    id: 4,
    name: "Cashmere Cardigan",
    price: 285,
    originalPrice: 325,
    image: "https://images.pexels.com/photos/4210854/pexels-photo-4210854.jpeg",
    category: "Women",
  },
];

const ProductGrid = ({
  title = "Featured Pieces",
  description = "Handpicked favorites that embody our commitment to quality, comfort, and timeless style.",
  products = defaultProducts,
  backgroundColor = "bg-background",
  columns = "4",
  viewMode = "grid",
  showViewAllButton = true,
  viewAllButtonText = "View All Products",
  viewAllButtonHref = "/collections/all",
  showAddToCart = false,
  showCategory = true,
  showColors = false,
}: ProductGridProps) => {
  const gridClasses = {
    "2": "grid-cols-1 sm:grid-cols-2",
    "3": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    "4": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  const ProductCard = ({
    product,
    isListView = false,
  }: {
    product: Product;
    isListView?: boolean;
  }) => (
    <Card
      className={`group cursor-pointer hover:shadow-lg transition-shadow duration-300 ${
        isListView ? "flex" : "h-full flex flex-col"
      }`}
    >
      <CardContent
        className={`p-0 ${isListView ? "" : "flex flex-col h-full"}`}
      >
        <div
          className={`relative overflow-hidden ${isListView ? "w-48 flex-shrink-0" : ""}`}
        >
          <img
            src={product.image}
            alt={product.name}
            className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
              isListView ? "w-full h-48" : "w-full h-80"
            }`}
          />
          {product.isNew && (
            <Badge className="absolute top-3 left-3 bg-primary">New</Badge>
          )}
          {(product.isSale || product.originalPrice) && (
            <Badge variant="destructive" className="absolute top-3 right-3">
              Sale
            </Badge>
          )}
        </div>
        <div
          className={`p-4 space-y-2 ${isListView ? "flex-1" : "flex flex-col flex-grow"}`}
        >
          {showCategory && product.category && (
            <p className="text-sm text-muted-foreground">{product.category}</p>
          )}
          <h3 className="font-medium group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          {product.description && (
            <p
              className={`text-sm text-muted-foreground ${
                isListView ? "" : "flex-grow"
              }`}
            >
              {product.description}
            </p>
          )}
          <div className="flex items-center gap-2">
            <span className="font-semibold">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          {showColors && product.colors && (
            <div className="flex flex-wrap gap-1">
              {product.colors.slice(0, 3).map((color: string) => (
                <span key={color} className="text-xs text-muted-foreground">
                  {color}
                </span>
              ))}
              {product.colors.length > 3 && (
                <span className="text-xs text-muted-foreground">
                  +{product.colors.length - 3} more
                </span>
              )}
            </div>
          )}
          {showAddToCart && (
            <Button size="sm" className="w-full mt-auto">
              Add to Cart
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className={`py-16 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        {(title || description) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl lg:text-4xl font-serif font-semibold mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}

        {viewMode === "list" ? (
          <div className="space-y-6">
            {products.map((product) => (
              <ProductCard
                key={product.id || product.name}
                product={product}
                isListView={true}
              />
            ))}
          </div>
        ) : (
          <div className={`grid ${gridClasses[columns]} gap-6`}>
            {products.map((product) => (
              <ProductCard
                key={product.id || product.name}
                product={product}
                isListView={false}
              />
            ))}
          </div>
        )}

        {showViewAllButton && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              {viewAllButtonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
