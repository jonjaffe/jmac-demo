import { FormEvent, useState } from "react";

interface StayConnectedProps {
  eyebrow?: string;
  description?: string;
  backgroundColor?: string;
  onSubmit?: (data: { firstName: string; lastName: string; email: string }) => void;
}

const StayConnected = ({
  eyebrow = "STAY CONNECTED",
  description = "Sign up for emails and enjoy 15% off your next full-price purchase!",
  backgroundColor = "bg-[#13294E]",
  onSubmit,
}: StayConnectedProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit?.({ firstName, lastName, email });
  };

  return (
    <section className={`${backgroundColor} px-4 py-8 sm:px-8 lg:px-[52px]`}>
      <div className="mx-auto flex max-w-[1440px] flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h3 className="text-xs font-semibold uppercase tracking-[1.2px] text-white">
            {eyebrow}
          </h3>
          <p className="text-xs leading-[1.66] text-white">{description}</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 sm:flex-row sm:items-stretch"
        >
          <input
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            className="min-h-[50px] flex-1 bg-white px-3 py-[18px] text-xs text-[#383838] placeholder:text-[#383838] focus:outline-none"
          />
          <input
            type="text"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            className="min-h-[50px] flex-1 bg-white px-3 py-[18px] text-xs text-[#383838] placeholder:text-[#383838] focus:outline-none"
          />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="min-h-[50px] flex-1 bg-white px-3 py-[18px] text-xs text-[#383838] placeholder:text-[#383838] focus:outline-none"
          />
          <button
            type="submit"
            className="min-h-[50px] flex-1 bg-[#327FEF] px-3 text-xs text-white transition-colors hover:bg-[#2a6fd4]"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
};

export default StayConnected;
