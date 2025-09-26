import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";

export interface TestComponentProps {
  title: string;
  description?: string;
  emoji?: string;
  backgroundColor?: string;
  align?: "left" | "center" | "right";
}

const alignmentClasses: Record<
  NonNullable<TestComponentProps["align"]>,
  string
> = {
  left: "text-left items-start",
  center: "text-center items-center",
  right: "text-right items-end",
};

export default function TestComponent({
  title,
  description,
  emoji = "🧪",
  backgroundColor = "bg-muted/30",
  align = "center",
}: TestComponentProps) {
  return (
    <section className={`${backgroundColor} py-10`}>
      <div className="container mx-auto max-w-3xl">
        <Card>
          <CardHeader className={alignmentClasses[align]}>
            <span className="text-4xl" aria-hidden>
              {emoji}
            </span>
            <CardTitle>{title}</CardTitle>
            {description ? (
              <CardDescription>{description}</CardDescription>
            ) : null}
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p>
              This is a simple, well-typed demo component for testing
              integration and layout. It accepts a title, optional description,
              an emoji icon, background color utility class, and alignment.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
