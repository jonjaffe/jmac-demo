import React from "react";
import { cn } from "../lib/utils";

export type TestComponentProps = {
  title: string;
  message?: string;
  tone?: "info" | "success" | "warning" | "error";
  className?: string;
};

const toneStyles: Record<NonNullable<TestComponentProps["tone"]>, string> = {
  info: "bg-blue-50 text-blue-900 border-blue-200",
  success: "bg-green-50 text-green-900 border-green-200",
  warning: "bg-yellow-50 text-yellow-900 border-yellow-200",
  error: "bg-red-50 text-red-900 border-red-200",
};

export default function TestComponent({
  title,
  message,
  tone = "info",
  className,
}: TestComponentProps) {
  return (
    <section
      aria-label={title}
      className={cn(
        "w-full rounded-md border p-4 md:p-6 shadow-sm",
        toneStyles[tone],
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <span aria-hidden className="text-xl leading-none">
          {tone === "info" && "ℹ️"}
          {tone === "success" && "✅"}
          {tone === "warning" && "⚠️"}
          {tone === "error" && "⛔"}
        </span>
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">{title}</h3>
          {message ? <p className="text-sm opacity-90">{message}</p> : null}
        </div>
      </div>
    </section>
  );
}
