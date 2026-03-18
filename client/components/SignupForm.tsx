import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface SignupFormProps {
  badge?: string;
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  backgroundColor?: string;
}

const SignupForm = ({
  badge = "Stay Updated",
  title = "Join Our Newsletter",
  description = "Subscribe to get exclusive offers, style tips, and early access to new collections.",
  placeholder = "Enter your email",
  buttonText = "Sign Up",
  backgroundColor = "bg-gradient-to-r from-navy-50 to-cream-50",
}: SignupFormProps) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you could call an API to save the email
      console.log("Signup email:", email);
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className={`py-12 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto text-center">
          {badge && (
            <Badge variant="secondary" className="w-fit mb-4 mx-auto">
              {badge}
            </Badge>
          )}
          <h2 className="text-2xl lg:text-3xl font-serif font-semibold mb-3">
            {title}
          </h2>
          <p className="text-muted-foreground mb-6">{description}</p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="email"
              placeholder={placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white"
            />
            <Button type="submit" size="lg" className="w-full">
              {buttonText}
            </Button>
          </form>

          {submitted && (
            <p className="text-sm text-green-600 mt-3">
              Thank you for signing up!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
