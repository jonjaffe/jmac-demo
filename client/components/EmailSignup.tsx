import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface EmailSignupProps {
  heading?: string;
  subheading?: string;
  firstNamePlaceholder?: string;
  lastNamePlaceholder?: string;
  emailPlaceholder?: string;
  buttonText?: string;
  backgroundColor?: string;
  onSubmit?: (data: { firstName: string; lastName: string; email: string }) => void;
}

const EmailSignup: React.FC<EmailSignupProps> = ({
  heading = "STAY CONNECTED",
  subheading = "Sign up for emails and enjoy 15% off your next full-price purchase!",
  firstNamePlaceholder = "First Name",
  lastNamePlaceholder = "Last Name",
  emailPlaceholder = "Enter email",
  buttonText = "SUBMIT",
  backgroundColor = "bg-[#13294E]",
  onSubmit,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.({ firstName, lastName, email });
  };

  return (
    <section className={cn("w-full py-8 px-5 md:px-12 lg:px-[209.5px]", backgroundColor)}>
      <div className="max-w-[1440px] mx-auto flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <p className="text-white text-xs font-semibold tracking-[1.2px] uppercase leading-[18px]">
            {heading}
          </p>
          <p className="text-white text-xs font-normal leading-[19.92px]">
            {subheading}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-5"
        >
          <input
            type="text"
            placeholder={firstNamePlaceholder}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="flex-1 min-h-[50px] px-3 py-[18px] bg-white text-[#383838] text-xs font-normal placeholder:text-[#383838] focus:outline-none focus:ring-2 focus:ring-[#327FEF]"
          />
          <input
            type="text"
            placeholder={lastNamePlaceholder}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="flex-1 min-h-[50px] px-3 py-[18px] bg-white text-[#383838] text-xs font-normal placeholder:text-[#383838] focus:outline-none focus:ring-2 focus:ring-[#327FEF]"
          />
          <input
            type="email"
            placeholder={emailPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 min-h-[50px] px-3 py-[18px] bg-white text-[#383838] text-xs font-normal placeholder:text-[#383838] focus:outline-none focus:ring-2 focus:ring-[#327FEF]"
          />
          <button
            type="submit"
            className="flex-1 min-h-[50px] px-3 py-4 bg-[#327FEF] text-white text-xs font-normal text-center leading-[18px] hover:bg-[#2060c0] transition-colors focus:outline-none focus:ring-2 focus:ring-[#327FEF] focus:ring-offset-2"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSignup;
