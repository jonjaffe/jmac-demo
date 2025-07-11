import { Link } from "react-router-dom";

export interface ProductItem {
  title: string;
  subtitle?: string;
  image: string;
  href: string;
  alt?: string;
}

interface ProductShowcaseProps {
  products: ProductItem[];
  className?: string;
  imageHeight?: string;
  gap?: string;
  showTitles?: boolean;
  zoomScale?: number;
}

const ProductShowcase = ({
  products = [],
  className = "",
  imageHeight = "h-[400px] md:h-[500px] lg:h-[632px]",
  gap = "gap-1.5",
  showTitles = true,
  zoomScale = 1.1,
}: ProductShowcaseProps) => {
  const zoomClass = `hover:scale-[${zoomScale}]`;

  return (
    <section className={`w-full ${className}`}>
      <div className={`flex flex-col lg:flex-row ${gap} w-full`}>
        {products.map((product, index) => (
          <Link
            key={index}
            to={product.href}
            className="group block flex-1 relative overflow-hidden bg-white"
          >
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.alt || product.title}
                className={`w-full ${imageHeight} object-cover transition-transform duration-500 ease-out ${zoomClass}`}
              />

              {showTitles && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              )}

              {showTitles && (
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                    <h3 className="text-2xl md:text-3xl font-serif font-medium mb-1 tracking-wide">
                      {product.title}
                    </h3>
                    {product.subtitle && (
                      <p className="text-lg font-light opacity-90">
                        {product.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              )}

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;
