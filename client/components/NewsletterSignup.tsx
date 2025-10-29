import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export interface NewsletterSignupProps {
  heading?: string;
  description?: string;
  backgroundColor?: string;
  buttonText?: string;
  buttonColor?: string;
  showFirstName?: boolean;
  showLastName?: boolean;
  onSubmit?: (data: {
    firstName?: string;
    lastName?: string;
    email: string;
  }) => void;
  className?: string;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  heading = "STAY CONNECTED",
  description = "Sign up for emails and enjoy 15% off your next full-price purchase!",
  backgroundColor = "bg-navy-800",
  buttonText = "SUBMIT",
  buttonColor = "bg-blue-500 hover:bg-blue-600",
  showFirstName = true,
  showLastName = true,
  onSubmit,
  className,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const data: {
      firstName?: string;
      lastName?: string;
      email: string;
    } = { email };

    if (showFirstName) data.firstName = firstName;
    if (showLastName) data.lastName = lastName;

    if (onSubmit) {
      onSubmit(data);
    } else {
      console.log("Newsletter signup:", data);
    }

    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <section
      className={cn(
        "w-full py-8 md:py-12 lg:py-16",
        backgroundColor,
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Heading and Description */}
          <div className="mb-6 md:mb-8">
            <h3 className="text-white text-xs font-semibold tracking-widest mb-2 uppercase">
              {heading}
            </h3>
            <p className="text-white text-xs md:text-sm font-normal leading-relaxed max-w-md">
              {description}
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 md:gap-5"
          >
            {showFirstName && (
              <Input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className={cn(
                  "flex-1 h-12 md:h-[50px] bg-white",
                  "text-sm text-gray-700 placeholder:text-gray-600",
                  "border-0 focus-visible:ring-1 focus-visible:ring-navy-800"
                )}
              />
            )}

            {showLastName && (
              <Input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className={cn(
                  "flex-1 h-12 md:h-[50px] bg-white",
                  "text-sm text-gray-700 placeholder:text-gray-600",
                  "border-0 focus-visible:ring-1 focus-visible:ring-navy-800"
                )}
              />
            )}

            <Input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={cn(
                "flex-1 h-12 md:h-[50px] bg-white",
                "text-sm text-gray-700 placeholder:text-gray-600",
                "border-0 focus-visible:ring-1 focus-visible:ring-navy-800"
              )}
            />

            <Button
              type="submit"
              className={cn(
                "flex-1 sm:flex-none sm:min-w-[200px] lg:min-w-[345px]",
                "h-12 md:h-[50px]",
                "text-white text-xs font-normal uppercase tracking-wide",
                buttonColor,
                "transition-colors duration-200"
              )}
            >
              {buttonText}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
