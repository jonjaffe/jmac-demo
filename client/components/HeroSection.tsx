import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeroButton {
  text: string;
  href: string;
  variant?: "default" | "outline" | "destructive" | "secondary" | "ghost" | "link";
}

interface HeroSectionProps {
  badge?: string;
  title: string;
  highlightedText?: string;
  description: string;
  buttons?: HeroButton[];
  image: string;
  imageAlt: string;
  backgroundColor?: string;
}

const defaultButtons: HeroButton[] = [
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
];

const HeroSection = ({
  badge,
  title,
  highlightedText,
  description,
  buttons = defaultButtons,
  image,
  imageAlt,
  backgroundColor = "bg-gradient-to-r from-navy-50 to-cream-50",
}: HeroSectionProps) => {
  return (
    <section className={`relative ${backgroundColor}`}>
      <div className="container mx-auto px-4 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {badge && (
              <Badge variant="secondary" className="w-fit">
                {badge}
              </Badge>
            )}
            <h1 className="text-4xl lg:text-6xl font-serif font-bold leading-tight">
              {title}{" "}
              {highlightedText && (
                <span className="text-primary">{highlightedText}</span>
              )}
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {buttons.map((button, idx) => (
                <Link key={idx} to={button.href}>
                  <Button
                    size="lg"
                    variant={button.variant || (idx === 0 ? "default" : "outline")}
                    className={idx === 0 ? "btn-primary" : undefined}
                  >
                    {button.text}
                    {idx === 0 && <ArrowRight className="ml-2 h-5 w-5" />}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
