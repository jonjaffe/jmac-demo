import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CartFlyoutProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartFlyout = ({ isOpen, onClose }: CartFlyoutProps) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Flyout panel */}
      <div
        className={`fixed right-0 top-0 h-screen w-full max-w-md bg-background shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex flex-col h-[calc(100%-120px)] p-4">
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            <p>Your cart is empty</p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-4 space-y-3">
          <Button className="w-full" size="lg">
            Checkout
          </Button>
          <Button
            variant="outline"
            className="w-full"
            size="lg"
            onClick={onClose}
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </>
  );
};
