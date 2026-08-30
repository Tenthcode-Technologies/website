import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

const variants = {
  primary:
    "bg-tech-blue text-white border-tech-blue hover:bg-electric-blue hover:border-electric-blue",
  secondary:
    "bg-transparent text-deep-gray border-slate-300 hover:border-deep-gray hover:bg-white",
  light:
    "bg-cloud-white text-deep-navy border-cloud-white hover:bg-white hover:border-white",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-3 border px-5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric-blue ${variants[variant]} ${className}`}
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}
