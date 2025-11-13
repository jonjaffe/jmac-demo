import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const rakutenButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-42 relative overflow-hidden",
  {
    variants: {
      type: {
        "primary-red": "bg-[#BF0000] text-white hover:bg-[#BF0000]/95 active:bg-[#BF0000]",
        "primary-black": "bg-black text-white hover:bg-black/95 active:bg-black",
        "primary-white": "bg-white text-black hover:bg-white/95 active:bg-white",
        "secondary-contained": "bg-transparent text-black hover:bg-black/4 active:bg-black/4 dark:text-white dark:hover:bg-white/8 dark:active:bg-white/8",
        "tertiary-text": "bg-transparent text-[#BF0000] hover:bg-[#FCF2F2] active:bg-[#FCF2F2]",
        "tertiary-text-subtle": "bg-transparent text-black hover:bg-black/4 active:bg-black/4 dark:text-white dark:hover:bg-white/8 dark:active:bg-white/8",
        "tertiary-underlined-text": "bg-transparent text-[#BF0000] underline hover:bg-[#FCF2F2] active:bg-[#FCF2F2]",
        "tertiary-underlined-text-subtle": "bg-transparent text-black underline hover:bg-black/4 active:bg-black/4 dark:text-white dark:hover:bg-white/8 dark:active:bg-white/8",
      },
      size: {
        regular: "h-12 px-4 text-base leading-[22px]",
        small: "h-8 px-3 text-sm leading-5",
      },
      iconPosition: {
        none: "",
        left: "pl-3",
        right: "pr-3",
        only: "p-0 w-12 h-12 rounded-full",
      },
      darkMode: {
        false: "",
        true: "dark",
      },
    },
    compoundVariants: [
      {
        type: "primary-red",
        className: "focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white",
      },
      {
        type: "primary-black",
        className: "focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white",
      },
      {
        type: "primary-white",
        className: "focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black",
      },
      {
        iconPosition: "only",
        size: "small",
        className: "w-8 h-8",
      },
    ],
    defaultVariants: {
      type: "primary-red",
      size: "regular",
      iconPosition: "none",
      darkMode: false,
    },
  }
);

const ChevronRightIcon = ({ className, fill = "currentColor" }: { className?: string; fill?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M10.03 18.53L8.97 17.47L14.44 12L8.97 6.52997L10.03 5.46997L16.56 12L10.03 18.53Z" fill={fill}/>
  </svg>
);

const SquareIcon = ({ className, fill = "currentColor" }: { className?: string; fill?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M18.2222 4H5.77778C4.8 4 4 4.8 4 5.77778V18.2222C4 19.2 4.8 20 5.77778 20H18.2222C19.2 20 20 19.2 20 18.2222V5.77778C20 4.8 19.2 4 18.2222 4Z" fill={fill}/>
  </svg>
);

const BigSquareIcon = ({ className, fill = "currentColor" }: { className?: string; fill?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M20.5556 1H3.44444C2.1 1 1 2.1 1 3.44444V20.5556C1 21.9 2.1 23 3.44444 23H20.5556C21.9 23 23 21.9 23 20.5556V3.44444C23 2.1 21.9 1 20.5556 1Z" fill={fill}/>
  </svg>
);

const LoadingSpinner = ({ className, stroke = "currentColor" }: { className?: string; stroke?: string }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("animate-spin", className)}>
    <path d="M11 2C12.1819 2 13.3522 2.23279 14.4442 2.68508C15.5361 3.13738 16.5282 3.80031 17.364 4.63604C18.1997 5.47177 18.8626 6.46392 19.3149 7.55585C19.7672 8.64778 20 9.8181 20 11" stroke={stroke} strokeWidth="4"/>
  </svg>
);

export interface RakutenButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof rakutenButtonVariants> {
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: boolean;
  iconOnly?: React.ReactNode;
}

const RakutenButton = React.forwardRef<HTMLButtonElement, RakutenButtonProps>(
  ({ 
    className, 
    type = "primary-red",
    size = "regular",
    iconPosition = "none",
    darkMode = false,
    loading = false,
    leftIcon,
    rightIcon = false,
    iconOnly,
    children,
    disabled,
    ...props 
  }, ref) => {
    
    // Determine icon position based on props
    let finalIconPosition: "none" | "left" | "right" | "only" = iconPosition;
    if (iconOnly) {
      finalIconPosition = "only";
    } else if (leftIcon) {
      finalIconPosition = "left";
    } else if (rightIcon) {
      finalIconPosition = "right";
    }

    // Determine icon fill color based on type
    const getIconFill = () => {
      if (type === "primary-red" || type === "primary-black") return "white";
      if (type === "primary-white") return "black";
      if (type === "tertiary-text" || type === "tertiary-underlined-text") return "#BF0000";
      return "currentColor";
    };

    const getSpinnerStroke = () => {
      if (type === "primary-red" || type === "primary-black") return "white";
      if (type === "primary-white" || type === "secondary-contained") return "black";
      return "currentColor";
    };

    return (
      <button
        className={cn(rakutenButtonVariants({ type, size, iconPosition: finalIconPosition, darkMode, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && finalIconPosition === "left" && (
          <LoadingSpinner stroke={getSpinnerStroke()} />
        )}
        
        {!loading && finalIconPosition === "left" && leftIcon}
        
        {finalIconPosition === "only" ? (
          loading ? (
            <LoadingSpinner stroke={getSpinnerStroke()} />
          ) : iconOnly ? (
            iconOnly
          ) : (
            <BigSquareIcon fill={getIconFill()} />
          )
        ) : (
          <>
            {loading && finalIconPosition !== "left" ? (
              <span className="flex items-center gap-2">
                <LoadingSpinner stroke={getSpinnerStroke()} />
                <span>Loading...</span>
              </span>
            ) : (
              children
            )}
          </>
        )}
        
        {!loading && finalIconPosition === "right" && (
          <ChevronRightIcon fill={getIconFill()} />
        )}
      </button>
    );
  }
);

RakutenButton.displayName = "RakutenButton";

export { RakutenButton, rakutenButtonVariants };
