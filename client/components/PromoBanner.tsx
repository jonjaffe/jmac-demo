import { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface PromoBannerProps {
  message: string;
  href?: string;
  linkLabel?: string;
}

const PromoBanner = ({
  message,
  href = "/collections/sale",
  linkLabel = "Shop sale",
}: PromoBannerProps) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      role="region"
      aria-label="Promotion"
      className="bg-primary text-primary-foreground"
    >
      <div className="container mx-auto px-4 py-2 flex items-center justify-center gap-3 text-sm relative">
        <p className="text-center">
          {message}{" "}
          <Link to={href} className="underline font-medium hover:opacity-90">
            {linkLabel}
          </Link>
        </p>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Dismiss promotion"
          className="absolute right-2 h-7 w-7 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          onClick={() => setDismissed(true)}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default PromoBanner;
