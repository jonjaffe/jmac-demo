import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface StayConnectedProps {
  heading?: string;
  description?: string;
  backgroundColor?: string;
}

const StayConnected = ({
  heading = "STAY CONNECTED",
  description = "Sign up for emails and enjoy 15% off your next full-price purchase!",
  backgroundColor,
}: StayConnectedProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section
      className={cn(
        "w-full px-6 md:px-16 lg:px-[209px] py-8 md:py-10",
        backgroundColor ?? "bg-[#13294E]"
      )}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-5">
        {/* Text */}
        <div className="flex flex-col gap-2">
          <p className="text-white text-xs font-semibold tracking-[1.2px] uppercase leading-[18px]">
            {heading}
          </p>
          <p className="text-white text-xs font-normal leading-[19.92px]">
            {description}
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-5"
        >
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="flex-1 min-h-[50px] px-3 py-[18px] bg-white text-[#383838] text-xs font-normal placeholder:text-[#383838] focus:outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="flex-1 min-h-[50px] px-3 py-[18px] bg-white text-[#383838] text-xs font-normal placeholder:text-[#383838] focus:outline-none"
          />
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 min-h-[50px] px-3 py-[18px] bg-white text-[#383838] text-xs font-normal placeholder:text-[#383838] focus:outline-none"
          />
          <button
            type="submit"
            className="flex-1 min-h-[50px] px-3 py-4 bg-[#327FEF] text-white text-xs font-normal text-center tracking-wide hover:bg-[#2567d4] transition-colors"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
};

export default StayConnected;
