import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import useNavigation from "@/hooks/use-navigation";

const Navigation = () => {
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { navigationData, loading, error } = useNavigation();

  // Use the fetched main navigation data or fallback to empty array if loading
  const mainNavItems = loading ? [] : navigationData.mainNavItems;
  
  // Keep secondary navigation items hardcoded as they were before
  const secondaryNavItems = [
    { label: "New Arrivals", href: "/collections/new-arrivals" },
    { label: "Best Sellers", href: "/collections/best-sellers" },
    { label: "Style Guide", href: "/style-guide" },
    { label: "Our Story", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Kitchen Sink", href: "/kitchen-sink" },
  ];

  // Show loading state if data is being fetched
  if (loading) {
    return (
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl lg:text-3xl font-serif font-semibold text-primary">
              McLaughlin & Co.
            </div>
            <div className="text-sm text-muted-foreground">Loading navigation...</div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      {/* Top bar with secondary navigation */}
      <div className="hidden lg:block bg-muted/50 py-2">
        <div className="container mx-auto px-4">
          <nav className="flex justify-center space-x-8">
            {secondaryNavItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu trigger */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <div className="flex flex-col space-y-6 pt-6">
                  <SheetClose asChild>
                    <Link to="/" className="text-2xl font-serif font-semibold">
                      McLaughlin & Co.
                    </Link>
                  </SheetClose>
                  <nav className="flex flex-col space-y-4">
                    {mainNavItems.map((item) => (
                      <SheetClose asChild key={item.href}>
                        <Link
                          to={item.href}
                          className="text-lg font-medium hover:text-primary transition-colors"
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="border-t pt-6">
                    <nav className="flex flex-col space-y-3">
                      {secondaryNavItems.map((item) => (
                        <SheetClose asChild key={item.href}>
                          <Link
                            to={item.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {item.label}
                          </Link>
                        </SheetClose>
                      ))}
                    </nav>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <div className="flex-1 lg:flex-none lg:mr-8">
            <Link
              to="/"
              className="text-2xl lg:text-3xl font-serif font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              McLaughlin & Co.
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center space-x-8 flex-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`font-medium transition-colors hover:text-primary ${
                  location.pathname === item.href
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:block">
              {isSearchOpen ? (
                <div className="flex items-center">
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-40 lg:w-60"
                    autoFocus
                    onBlur={() => setIsSearchOpen(false)}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search className="h-5 w-5" />
                </Button>
              )}
            </div>

            {/* Mobile search */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>

            {/* Account */}
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Heart className="h-5 w-5" />
            </Button>

            {/* Shopping bag */}
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
