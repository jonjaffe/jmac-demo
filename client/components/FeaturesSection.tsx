import { ReactNode } from "react";

export interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  features: Feature[];
  backgroundColor?: string;
  columns?: "2" | "3" | "4";
}

const defaultFeatures = [
  { icon: "🚚", title: "Free Shipping", description: "On orders over $150" },
  { icon: "🔄", title: "Easy Returns", description: "30-day return policy" },
  { icon: "🛡️", title: "Secure Payment", description: "Your data is protected" },
  { icon: "⭐", title: "Premium Quality", description: "Finest materials and craftsmanship" },
];

const FeaturesSection = ({
  features = defaultFeatures,
  backgroundColor = "bg-background",
  columns = "4",
}: FeaturesSectionProps) => {
  const gridClasses = {
    "2": "grid-cols-1 sm:grid-cols-2",
    "3": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    "4": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className={`py-16 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <div className={`grid ${gridClasses[columns]} gap-8`}>
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full">
                {feature.icon}
              </div>
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
