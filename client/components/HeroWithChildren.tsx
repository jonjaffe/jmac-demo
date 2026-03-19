import React from "react";

interface HeroWithChildrenProps {
  children?: React.ReactNode;
  image: string;
  imageAlt: string;
  backgroundColor?: string;
}

const HeroWithChildren = ({
  children,
  image,
  imageAlt,
  backgroundColor = "bg-gradient-to-r from-navy-50 to-cream-50",
}: HeroWithChildrenProps) => {
  return (
    <section className={`relative ${backgroundColor}`}>
      <div className="container mx-auto px-4 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* Ensure children are spaced the same as HeroSection */}
            {React.Children.map(children, (child) => (
              <div>{child}</div>
            ))}
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

export default HeroWithChildren; 