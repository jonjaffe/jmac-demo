export interface Color {
  name: string;
  color: string; // Tailwind class like 'bg-blue-500'
  hex: string;
}

interface ColorPaletteProps {
  title: string;
  description: string;
  colors: Color[];
  backgroundColor?: string;
  columns?: "2" | "3" | "4" | "5" | "6";
}

const defaultColors = [
  { name: "Ocean Blue", color: "bg-blue-500", hex: "#3B82F6" },
  { name: "Sage Green", color: "bg-green-400", hex: "#4ADE80" },
  { name: "Warm Cream", color: "bg-yellow-100", hex: "#FEF3C7" },
  { name: "Coral Pink", color: "bg-pink-400", hex: "#F472B6" },
  { name: "Sand Beige", color: "bg-amber-200", hex: "#FDE68A" },
  { name: "Classic Navy", color: "bg-blue-900", hex: "#1E3A8A" },
];

const ColorPalette = ({
  title = "Summer Color Palette",
  description = "This season's colors are inspired by coastal landscapes and summer sunsets. Mix and match these hues for effortless coordination.",
  colors = defaultColors,
  backgroundColor = "bg-background",
  columns = "6",
}: ColorPaletteProps) => {
  const gridClasses = {
    "2": "grid-cols-2",
    "3": "grid-cols-2 md:grid-cols-3",
    "4": "grid-cols-2 md:grid-cols-4",
    "5": "grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
    "6": "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
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
        <div className={`grid ${gridClasses[columns]} gap-6`}>
          {colors.map((color, index) => (
            <div key={index} className="text-center">
              <div
                style={color.hex ? { backgroundColor: color.hex } : undefined}
                className={`w-20 h-20 rounded-full mx-auto mb-3 shadow-lg hover:scale-105 transition-transform duration-200${!color.hex && color.color ? ` ${color.color}` : ""}`}
              />
              <h3 className="font-medium mb-1">{color.name}</h3>
              <p className="text-sm text-muted-foreground">{color.hex}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ColorPalette;
