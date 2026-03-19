import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface ActionButton {
  text: string;
  href: string;
  variant?: "default" | "outline" | "ghost";
  className?: string;
}

interface CallToActionSectionProps {
  title: string;
  description: string;
  buttons: ActionButton[];
  badge?: string;
  image?: string;
  imageAlt?: string;
  backgroundColor?: string;
  layout?: "centered" | "side-by-side";
  imagePosition?: "left" | "right";
}

const defaultButtons = [
  {
    text: "Explore the Guide",
    href: "/style-guide",
    className: "btn-primary",
  },
];

const CallToActionSection = ({
  badge = "Style Guide",
  title = "The Summer Style Guide",
  description =
    "Discover the perfect pieces for warm weather entertaining, coastal getaways, and everything in between. Our curated selection makes summer dressing effortless and elegant.",
  buttons = defaultButtons,
  image = "https://images.pexels.com/photos/32796818/pexels-photo-32796818.jpeg",
  imageAlt = "Summer Style Guide",
  layout = "side-by-side",
  imagePosition = "left",
  backgroundColor = "bg-gradient-to-r from-sage-100 to-cream-100",
}: CallToActionSectionProps) => {
  if (layout === "centered") {
    return (
      <section className={`py-16 ${backgroundColor}`}>
        <div className="container mx-auto px-4 text-center">
          {badge && (
            <Badge variant="outline" className="w-fit mb-4 mx-auto">
              {badge}
            </Badge>
          )}
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {buttons.map((button, index) => (
              <Link key={index} to={button.href}>
                <Button
                  size="lg"
                  variant={button.variant || "default"}
                  className={button.className}
                >
                  {button.text}
                  {index === 0 && <ArrowRight className="ml-2 h-5 w-5" />}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Side-by-side layout
  return (
    <section className={`py-16 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`${imagePosition === "right" ? "order-2 lg:order-2" : "order-2 lg:order-1"}`}
          >
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div
            className={`space-y-6 ${imagePosition === "right" ? "order-1 lg:order-1" : "order-1 lg:order-2"}`}
          >
            {badge && (
              <Badge variant="outline" className="w-fit">
                {badge}
              </Badge>
            )}
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold">
              {title}
            </h2>
            <p className="text-muted-foreground">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              {buttons.map((button, index) => (
                <Link key={index} to={button.href}>
                  <Button
                    size="lg"
                    variant={button.variant || "default"}
                    className={button.className}
                  >
                    {button.text}
                    {index === 0 && <ArrowRight className="ml-2 h-5 w-5" />}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
