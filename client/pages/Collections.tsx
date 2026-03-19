import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Filter, Grid, List, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductGrid, { Product } from "@/components/ProductGrid";

const Collections = () => {
  const { category } = useParams();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("newest");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const categoryTitle = category
    ? category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, " ")
    : "All Products";

  const products: Product[] = [
    {
      id: 1,
      name: "Classic Oxford Shirt",
      price: 128,
      image:
        "https://images.pexels.com/photos/6276012/pexels-photo-6276012.jpeg",
      colors: ["White", "Blue", "Navy"],
      sizes: ["S", "M", "L", "XL"],
      isNew: true,
      isSale: false,
    },
    {
      id: 2,
      name: "Tailored Chino Pants",
      price: 98,
      originalPrice: 125,
      image:
        "https://images.pexels.com/photos/31135566/pexels-photo-31135566.jpeg",
      colors: ["Khaki", "Navy", "Olive"],
      sizes: ["30", "32", "34", "36"],
      isNew: false,
      isSale: true,
    },
    {
      id: 3,
      name: "Merino Wool Sweater",
      price: 185,
      image:
        "https://images.pexels.com/photos/4210854/pexels-photo-4210854.jpeg",
      colors: ["Navy", "Charcoal", "Cream"],
      sizes: ["S", "M", "L", "XL"],
      isNew: true,
      isSale: false,
    },
    {
      id: 4,
      name: "Linen Sport Coat",
      price: 298,
      originalPrice: 365,
      image:
        "https://images.pexels.com/photos/5264948/pexels-photo-5264948.jpeg",
      colors: ["Natural", "Navy"],
      sizes: ["38", "40", "42", "44"],
      isNew: false,
      isSale: true,
    },
    {
      id: 5,
      name: "Cashmere Scarf",
      price: 98,
      image:
        "https://images.pexels.com/photos/1870926/pexels-photo-1870926.jpeg",
      colors: ["Navy", "Grey", "Burgundy"],
      sizes: ["One Size"],
      isNew: false,
      isSale: false,
    },
    {
      id: 6,
      name: "Leather Dress Shoes",
      price: 285,
      image:
        "https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg",
      colors: ["Brown", "Black"],
      sizes: ["8", "9", "10", "11", "12"],
      isNew: true,
      isSale: false,
    },
  ];

  const sizes = [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "30",
    "32",
    "34",
    "36",
    "38",
    "40",
    "42",
    "44",
  ];
  const colors = [
    "White",
    "Blue",
    "Navy",
    "Khaki",
    "Olive",
    "Charcoal",
    "Cream",
    "Natural",
    "Grey",
    "Burgundy",
    "Brown",
    "Black",
  ];

  const handleSizeChange = (size: string, checked: boolean) => {
    if (checked) {
      setSelectedSizes([...selectedSizes, size]);
    } else {
      setSelectedSizes(selectedSizes.filter((s) => s !== size));
    }
  };

  const handleColorChange = (color: string, checked: boolean) => {
    if (checked) {
      setSelectedColors([...selectedColors, color]);
    } else {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-semibold mb-4">
              {categoryTitle}
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our collection of timeless pieces designed for the modern
              lifestyle. Each item is carefully selected for quality, comfort,
              and enduring style.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-64 space-y-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-4">Filters</h3>

              {/* Price Range */}
              <div className="space-y-3 mb-6">
                <h4 className="text-sm font-medium">Price Range</h4>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={500}
                  step={10}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              {/* Sizes */}
              <div className="space-y-3 mb-6">
                <h4 className="text-sm font-medium">Size</h4>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map((size) => (
                    <div key={size} className="flex items-center space-x-2">
                      <Checkbox
                        id={`size-${size}`}
                        checked={selectedSizes.includes(size)}
                        onCheckedChange={(checked) =>
                          handleSizeChange(size, checked as boolean)
                        }
                      />
                      <label htmlFor={`size-${size}`} className="text-sm">
                        {size}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium">Color</h4>
                <div className="space-y-2">
                  {colors.map((color) => (
                    <div key={color} className="flex items-center space-x-2">
                      <Checkbox
                        id={`color-${color}`}
                        checked={selectedColors.includes(color)}
                        onCheckedChange={(checked) =>
                          handleColorChange(color, checked as boolean)
                        }
                      />
                      <label htmlFor={`color-${color}`} className="text-sm">
                        {color}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <p className="text-sm text-muted-foreground">
                Showing {products.length} products
              </p>

              <div className="flex items-center gap-4">
                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                  </SelectContent>
                </Select>

                {/* View Mode */}
                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            <ProductGrid
              products={products}
              viewMode={viewMode}
              columns="3"
              showColors={true}
              showCategory={false}
            />

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Products
              </Button>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Collections;
