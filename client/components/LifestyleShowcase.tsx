import React from "react";
import { cn } from "../lib/utils";

interface LifestyleItem {
  image: string;
  title: string;
  alt?: string;
}

interface LifestyleShowcaseProps {
  items: LifestyleItem[];
  className?: string;
  backgroundColor?: string;
  gap?: "sm" | "md" | "lg";
  aspectRatio?: "square" | "portrait" | "landscape";
}

const LifestyleShowcase: React.FC<LifestyleShowcaseProps> = ({
  items = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4679e81e7ec467524065876aaae3dae152685276?width=950",
      title: "The Linen Shirt",
      alt: "Person wearing white linen shirt outdoors",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/647eb1248778d0f1e7ea8bcfb6ccb5ea2dfa323f?width=950",
      title: "The White Dress",
      alt: "Woman in white dress",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b844558521324ac08a9af04837b5172cbd506f00?width=950",
      title: "The Wicker Bag",
      alt: "Person holding wicker bag",
    },
  ],
  className,
  backgroundColor = "bg-white",
  gap = "sm",
  aspectRatio = "portrait",
}) => {
  const gapClasses = {
    sm: "gap-1.5",
    md: "gap-4",
    lg: "gap-8",
  };

  const aspectRatioClasses = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
  };

  return (
    <div className={cn(backgroundColor, "py-8", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn("grid auto-cols-fr grid-flow-col", gapClasses[gap])}>
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-gray-100"
            >
              <div
                className={cn(
                  "relative overflow-hidden",
                  aspectRatioClasses[aspectRatio],
                )}
              >
                <img
                  src={item.image}
                  alt={item.alt || item.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Overlay gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl md:text-2xl font-serif font-medium tracking-wide">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LifestyleShowcase;
