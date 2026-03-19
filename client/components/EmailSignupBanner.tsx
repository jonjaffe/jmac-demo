import { useState } from "react";

interface EmailSignupBannerProps {
  heading?: string;
  subheading?: string;
  buttonText?: string;
}

const EmailSignupBanner = ({
  heading = "STAY CONNECTED",
  subheading = "Sign up for emails and enjoy 15% off your next full-price purchase!",
  buttonText = "SUBMIT",
}: EmailSignupBannerProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="w-full bg-[#13294E] py-8 px-4 sm:px-8 lg:px-[11.25%]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-5">
        {/* Text content */}
        <div className="flex flex-col gap-2">
          <p className="text-white text-xs font-semibold tracking-[1.2px] uppercase font-sans">
            {heading}
          </p>
          <p className="text-white text-xs font-normal leading-[1.66] font-sans">
            {subheading}
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4"
        >
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="flex-1 min-h-[50px] px-3 py-[18px] bg-white text-[#383838] text-xs font-normal placeholder:text-[#383838] outline-none focus:ring-2 focus:ring-[#327FEF]/50 transition-all"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="flex-1 min-h-[50px] px-3 py-[18px] bg-white text-[#383838] text-xs font-normal placeholder:text-[#383838] outline-none focus:ring-2 focus:ring-[#327FEF]/50 transition-all"
          />
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 min-h-[50px] px-3 py-[18px] bg-white text-[#383838] text-xs font-normal placeholder:text-[#383838] outline-none focus:ring-2 focus:ring-[#327FEF]/50 transition-all"
          />
          <button
            type="submit"
            className="flex-1 min-h-[50px] px-3 py-4 bg-[#327FEF] text-white text-xs font-normal text-center tracking-[0.5px] uppercase hover:bg-[#2a6fd8] transition-colors cursor-pointer"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSignupBanner;
