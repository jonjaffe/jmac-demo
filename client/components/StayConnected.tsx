import { useState } from "react";

interface StayConnectedProps {
  heading?: string;
  subheading?: string;
  buttonText?: string;
}

const StayConnected = ({
  heading = "STAY CONNECTED",
  subheading = "Sign up for emails and enjoy 15% off your next full-price purchase!",
  buttonText = "SUBMIT",
}: StayConnectedProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic can be wired here
  };

  return (
    <section className="w-full bg-[#13294E] px-6 py-8 md:px-16 lg:px-[209.5px]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <p className="text-white text-xs font-semibold tracking-[0.1em] uppercase">
            {heading}
          </p>
          <p className="text-white text-xs font-normal leading-relaxed">
            {subheading}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-5"
        >
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="flex-1 bg-white px-3 py-[18px] text-xs text-[#383838] placeholder-[#383838] min-h-[50px] outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="flex-1 bg-white px-3 py-[18px] text-xs text-[#383838] placeholder-[#383838] min-h-[50px] outline-none"
          />
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white px-3 py-[18px] text-xs text-[#383838] placeholder-[#383838] min-h-[50px] outline-none"
          />
          <button
            type="submit"
            className="flex-1 bg-[#327FEF] text-white text-xs font-normal tracking-wider text-center min-h-[50px] px-3 py-4 hover:bg-[#2568d4] transition-colors"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
};

export default StayConnected;
