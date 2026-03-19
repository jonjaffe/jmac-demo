import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export interface Collection {
  title: string;
  description: string;
  image: string;
  href: string;
}

interface CollectionsShowcaseProps {
  title: string;
  description: string;
  collections: Collection[];
  backgroundColor?: string;
  columns?: "1" | "2" | "3" | "4";
}

const CollectionsShowcase = ({
  title,
  description,
  collections = [],
  backgroundColor = "bg-muted/30",
  columns = "3",
}: CollectionsShowcaseProps) => {
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
          {collections.map((collection, index) => (
            <Link key={index} to={collection.href} className="group block">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-serif font-semibold mb-2">
                        {collection.title}
                      </h3>
                      <p className="text-white/90 mb-4">
                        {collection.description}
                      </p>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="group-hover:bg-white group-hover:text-primary transition-colors"
                      >
                        Shop Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsShowcase;
